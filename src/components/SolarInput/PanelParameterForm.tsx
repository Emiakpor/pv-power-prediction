import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, ScrollView, Button, KeyboardAvoidingView,
  Platform, Alert, Keyboard, SafeAreaView, TouchableOpacity, ActivityIndicator} from "react-native";
import { styles } from "@/styles/panel_parameters_style";
import { utilsStyles } from "@/styles";

import { predictHandler } from "@/components/SolarInput/SolarInputFormBE";

import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const PanelParametersForm = () => {
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const [marginBottom, setMarginBottom] = useState(100);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardOffset(0);
      setMarginBottom(0);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardOffset(0);
      scrollViewRef.current?.scrollToEnd({ animated: true });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const [form, setForm] = useState({
    model_type: "xgb",
    lat: "4.8027493",
    long: "7.033412",
    start_date: new Date().toISOString(),   // default now
    end_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // +1 day
    system_capacity: "5",
    panel_type: "mono",
    panel_efficiency: "20",
    temp_coefficient: "-0.38",
    degradation_rate: "0.5",
    previous_pv_output: "4",
    panel_tilt: "30",
    panel_azimuth: "180"
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // State for picker
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");
  const [activeField, setActiveField] = useState(null);

  const openPicker = (field, mode = "date") => {
    setActiveField(field);
    setPickerMode(mode);
    setShowPicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate && activeField) {
      handleChange(activeField, selectedDate.toISOString());
    }
  };

  const handleSubmit = () => {
    setPrediction(null);
    scrollViewRef.current?.scrollToEnd({ animated: true });

    for (let key in form) {
      if (!form[key]) {
        Alert.alert("Validation Error", `Please enter ${key.replace("_", " ")}`);
        return;
      }
    }

    const payload = {
      ...form,
      lat: parseFloat(form.lat),
      long: parseFloat(form.long),
      start_date: form.start_date,
      end_date: form.end_date,
      system_capacity: parseFloat(form.system_capacity),
      panel_efficiency: parseFloat(form.panel_efficiency),
      temp_coefficient: parseFloat(form.temp_coefficient),
      degradation_rate: parseFloat(form.degradation_rate),
      previous_pv_output: parseFloat(form.previous_pv_output),
      panel_tilt: parseFloat(form.panel_tilt),
      panel_azimuth: parseFloat(form.panel_azimuth),
      panel_type: form.panel_type,
    };
    predictHandler(setPrediction, setLoading, payload);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4f6d7a" }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Panel Parameters</Text>
        <Text style={styles.headerSubtitle}>
          Enter your panel specifications
        </Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <ScrollView
          style={[{ marginBottom: marginBottom }]}
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {/* Latitude */}
          <Text style={styles.label}>Latitude</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter latitude"
            keyboardType="numeric"
            value={form.lat}
            onChangeText={(text) => handleChange("lat", text)}
          />

          {/* Longitude */}
          <Text style={styles.label}>Longitude</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter longitude"
            keyboardType="numeric"
            value={form.long}
            onChangeText={(text) => handleChange("long", text)}
          />

          {/* 📅 Start Date */}
          <Text style={styles.label}>Start Date</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => openPicker("start_date")}
          >
            <Text>{new Date(form.start_date).toLocaleString()}</Text>
          </TouchableOpacity>

          {/* 📅 End Date */}
          <Text style={styles.label}>End Date</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => openPicker("end_date")}
          >
            <Text>{new Date(form.end_date).toLocaleString()}</Text>
          </TouchableOpacity>

          {/* Area */}
          <Text style={styles.label}>Area (m²)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Panel Capacity"
            keyboardType="numeric"
            value={form.system_capacity}
            onChangeText={(text) => handleChange("system_capacity", text)}
          />

          {/* Efficiency */}
          <Text style={styles.label}>Panel Efficiency (%)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Panel efficiency"
            keyboardType="numeric"
            value={form.panel_efficiency}
            onChangeText={(text) => handleChange("panel_efficiency", text)}
          />

          {/* Temp Coefficient */}
          <Text style={styles.label}>Temp Coefficient (%)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Temp Coefficient"
            keyboardType="numeric"
            value={form.temp_coefficient}
            onChangeText={(text) => handleChange("temp_coefficient", text)}
          />

          {/* Degradation Rate */}
          <Text style={styles.label}>Degradation Rate (%)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Degradation Rate"
            keyboardType="numeric"
            value={form.degradation_rate}
            onChangeText={(text) => handleChange("degradation_rate", text)}
          />

          {/* Previous PV Output */}
          <Text style={styles.label}>Previous PV Output (%)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Previous PV Output"
            keyboardType="numeric"
            value={form.previous_pv_output}
            onChangeText={(text) => handleChange("previous_pv_output", text)}
          />

          {/* Tilt Angle */}
          <Text style={styles.label}>Tilt Angle (°)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Tilt Angle"
            keyboardType="numeric"
            value={form.panel_tilt}
            onChangeText={(text) => handleChange("panel_tilt", text)}
          />

          {/* Azimuth */}
          <Text style={styles.label}>Azimuth (°)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter azimuth"
            keyboardType="numeric"
            value={form.panel_azimuth}
            onChangeText={(text) => handleChange("panel_azimuth", text)}
          />

          <Text style={styles.label}>Panel Type</Text>
          <Picker
            style={utilsStyles.picker}
            selectedValue={form.panel_type}
            onValueChange={(text) => handleChange("panel_type", text)}
          >
            <Picker.Item label="Monocrystalline" value="mono" />
            <Picker.Item label="Polycrystalline" value="poly" />
            <Picker.Item label="Thin Film" value="thinfilm" />
          </Picker>

          <View style={styles.buttonContainer}>
            <Button title="Prediction" onPress={handleSubmit} color="#4f6d7a" />
          </View>

          {loading && (
            <ActivityIndicator
              size="large"
              color="##4f6d7a"
              style={{ marginTop: 20 }}
            />
          )}
          {prediction !== null && (
            <Text style={[utilsStyles.pillButton, utilsStyles.predict]}>
              Predicted Power: {prediction.toFixed(2)} W
            </Text>
          )}
        </ScrollView>
      </KeyboardAvoidingView>

      {/* DateTimePicker Modal */}
      {showPicker && (
        <DateTimePicker
          value={new Date(form[activeField])}
          mode={pickerMode as "date"}
          display="default"
          onChange={onDateChange}
        />
      )}
    </SafeAreaView>
  );
};

export default PanelParametersForm;
