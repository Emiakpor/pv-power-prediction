import { defaultStyles, utilsStyles  } from "@/styles"
import { TouchableOpacity,Platform , View,
  ActivityIndicator, Keyboard,Text, ScrollView, TextInput, KeyboardAvoidingView,
  SafeAreaView,
 } from "react-native"
import { Picker } from '@react-native-picker/picker';
import React, { useState , useEffect, useRef} from "react";
import { PanelParams } from '@/models/SolarPanelDataModel';
import { handlePredict } from '@/components/SolarInput/SolarInputFormBE';
import { styles  } from "@/styles/panel_parameters_style"

const SolarInputForm = () => {

  const [lat, setLat] = useState("9.0579");
  const [lon, setLon] = useState("7.4951");
  const [area, setArea] = useState("1.6");
  const [efficiency, setEfficiency] = useState("0.18");
  const [tiltAngle, setTiltAngle] = useState("45");
  const [azimuth, setAzimuth] = useState("180");
  const [panelType, setPanelType] = useState("Monocrystalline");
  const [num_panels, setNumPanels] = useState("4");

  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const [marginBottom, setMarginBottom] = useState(100);
  
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardOffset(0); // move view up
      setMarginBottom(0)
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardOffset(0); // restore default state
      scrollViewRef.current?.scrollToEnd({ animated: true });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  
  const onPredict = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });

    const panelParams: PanelParams = {
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      area: parseFloat(area),
      efficiency: parseFloat(efficiency),
      tilt_angle: parseFloat(tiltAngle),
      azimuth: parseFloat(azimuth),
      panel_type: panelType,
      num_panels: parseInt(num_panels)
    };

    handlePredict(setPrediction, setLoading, panelParams);
  };
    
  

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#4f6d7a" }}>
            {/* Top Header Background */}
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Panel Parameters</Text>
              <Text style={styles.headerSubtitle}>
                Enter your panel specifications
              </Text>
            </View>
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}
         keyboardVerticalOffset={keyboardOffset}>
          <ScrollView ref={scrollViewRef} style={[utilsStyles.content, { marginBottom: marginBottom }]}
           contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-end", 
          }}
          keyboardShouldPersistTaps="handled">                    
            <Text style={utilsStyles.descriptionText}>Panel Type</Text>        
            <Picker style={utilsStyles.picker}
              selectedValue={panelType}
              onValueChange={setPanelType}
            >
              <Picker.Item label="Monocrystalline" value="mono" />
              <Picker.Item label="Polycrystalline" value="poly" />
              <Picker.Item label="Thin Film" value="thinfilm" />
            </Picker> 

            <Text style={utilsStyles.descriptionText}>Number of panels</Text>
            <TextInput
             style={utilsStyles.textInput}
             keyboardType="numeric"
             placeholder="e.g., 1–4"
             value={num_panels}
             onChangeText={setNumPanels}          
             />

            <Text style={utilsStyles.descriptionText}>Area</Text>
            <TextInput
             style={utilsStyles.textInput}
              keyboardType="numeric"
              placeholder="e.g., 10"
              value={area}
              onChangeText={setArea}           
            />

            <Text style={utilsStyles.descriptionText}>Efficiency (degrees)</Text>
            <TextInput
             style={utilsStyles.textInput}
             keyboardType="numeric"
             placeholder="e.g., 0–1"
             value={efficiency}
             onChangeText={setEfficiency}          
             />

            <Text style={utilsStyles.descriptionText}>Tilt Angle (degrees)</Text>
            <TextInput
             style={utilsStyles.textInput}
             keyboardType="numeric"
             placeholder="e.g., 30"
             value={tiltAngle}
             onChangeText={setTiltAngle}          
             />

            <Text style={utilsStyles.descriptionText}>Azimuth Angle (degrees)</Text>
            <TextInput
             style={utilsStyles.textInput}
             keyboardType="numeric"
             placeholder="e.g., 180"
             value={azimuth}
             onChangeText={setAzimuth}
             /> 

            <Text style={utilsStyles.descriptionText}>Latt</Text>
            <TextInput
             style={utilsStyles.textInput}
             keyboardType="numeric"
             placeholder="e.g., 180"
             value={lat}
             onChangeText={setLat}
             /> 

            <Text style={utilsStyles.descriptionText}>Azimuth Angle (degrees)</Text>
            <TextInput
             style={utilsStyles.textInput}
             keyboardType="numeric"
             placeholder="e.g., 180"
             value={lon}
             onChangeText={setLon}
             /> 

            <TouchableOpacity style={[utilsStyles.pillButton, utilsStyles.button, utilsStyles.marginTop20]}
             onPress={onPredict}>
                <Text style={utilsStyles.buttonText}>Prediction</Text>
            </TouchableOpacity>

            {loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}

            {prediction !== null && (
              <Text style={[utilsStyles.pillButton, utilsStyles.predict]}>
                Predicted Power: {prediction.toFixed(2)} W
              </Text>
            )}
          </ScrollView>
        </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export default SolarInputForm;