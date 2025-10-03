import { defaultStyles, utilsStyles,  } from "@/styles"
import { TouchableOpacity, Text, ScrollView, TextInput, KeyboardAvoidingView, Alert } from "react-native"
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { WeatherPoint, PanelParams } from '@/models/SolarPanelDataModel';
import { handlePredict } from '@/components/SolarInput/SolarInputFormBE';

const API_KEY = "e1eebd7c38b276c51014548b6c80167d";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const SOLAR_URL = "https://api.openweathermap.org/data/2.5/solar_radiation";
const NASA_URL = "https://power.larc.nasa.gov/api/temporal/hourly/point";

const [prediction, setPrediction] = useState<number | null>(null);
const [loading, setLoading] = useState<boolean>(false);

const SolarInputForm = () => {
    const [formData, setFormData] = useState({
      panel_type: 'Monocrystalline',
      panel_area: 400,
      panel_efficiency: 10,
      system_capacity: 14,
      soiling_factor: '',
      rated_power: '',
      num_panels: '',
      tilt_angle: '',
      azimuth_angle: '',
      lat: '',
      long: '',
    });
    
    const [prediction, setPrediction] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
    };

    const onPredict = async () => {
      try {

        const response = await axios.post('https://pv-power-prediction-api.onrender.com/predict', formData);
        // const response = await axios.post('http://127.0.0.1:8000/predict', formData);
        // const response = await axios.post('https://your-api-endpoint.com/predict', formData);
        Alert.alert('Success', 'Data submitted successfully: ' + JSON.stringify(response.data));
      } catch (error) {
        await storeDataLocally(formData);
      }
    };

    const storeDataLocally = async (data) => {
      try {
        await AsyncStorage.setItem('solarFormData', JSON.stringify(data));
        Alert.alert('Saved Locally', 'Data has been stored locally due to API issue.');
      } catch (error) {
        Alert.alert('Error', 'Failed to save data locally.');
      }
    };
    
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={10}>
          <ScrollView style={utilsStyles.content}>        
            <Text style={utilsStyles.descriptionText}>Panel Type</Text>        
          <Picker style={utilsStyles.picker}
            selectedValue={formData.panel_type}
            onValueChange={(value) => handleChange('panelType', value)}
          >
            <Picker.Item label="Monocrystalline" value="Monocrystalline" />
            <Picker.Item label="Polycrystalline" value="Polycrystalline" />
            <Picker.Item label="Thin Film" value="ThinFilm" />
          </Picker>
          <Text style={utilsStyles.descriptionText}>Panel Rated Power (W)</Text>
          <TextInput 
            style={utilsStyles.textInput} 
            keyboardType="numeric" 
            placeholder="e.g., 330"
            value={formData.rated_power}
            onChangeText={(value) => handleChange('ratedPower', value)}
          />        
          
          <Text style={utilsStyles.descriptionText}>Number of Panels</Text>
          <TextInput
           style={utilsStyles.textInput}
            keyboardType="numeric"
            placeholder="e.g., 10"
            value={formData.num_panels}
            onChangeText={(value) => handleChange('numPanels', value)}           
          />
        
          <Text style={utilsStyles.descriptionText}>Tilt Angle (degrees)</Text>
          <TextInput
           style={utilsStyles.textInput}
           keyboardType="numeric"
           placeholder="e.g., 30"
           value={formData.tilt_angle}
           onChangeText={(value) => handleChange('tiltAngle', value)}          
           />
        
          <Text style={utilsStyles.descriptionText}>Azimuth Angle (degrees)</Text>
          <TextInput
           style={utilsStyles.textInput}
           keyboardType="numeric"
           placeholder="e.g., 180"
           value={formData.azimuth_angle}
           onChangeText={(value) => handleChange('azimuthAngle', value)}
           /> 

          <TouchableOpacity style={[utilsStyles.pillButton, utilsStyles.button, utilsStyles.marginTop20]}
           onPress={onPredict}>
              <Text style={utilsStyles.buttonText}>Prediction</Text>
          </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SolarInputForm;