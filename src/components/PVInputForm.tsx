import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const PVInputForm = () => {
  const [formData, setFormData] = useState({
    ratedPower: '250',
    panelType: 'Monocrystalline',
    numberOfPanels: '10',
    tiltAngle: '30',
    azimuthAngle: '180',
    temperature: '30',
    irradiance: '700',
    windSpeed: '5'
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const storeDataLocally = async (data) => {
    try {
      await AsyncStorage.setItem('@pv_form_data', JSON.stringify(data));
      Alert.alert('Saved Locally', 'Data has been stored locally due to API issue.');
    } catch (error) {
      Alert.alert('Error', 'Failed to save data locally.');
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://your-api-endpoint.com/predict', formData);
      Alert.alert('Success', 'Data submitted successfully to API.');
    } catch (error) {
      console.error('API Error:', error);
      await storeDataLocally(formData);
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      {Object.keys(formData).map((key) => (
        <View key={key} style={{ marginBottom: 10 }}>
          <Text>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</Text>
          <TextInput
            style={{ borderWidth: 1, padding: 8, borderRadius: 5 }}
            value={formData[key]}
            onChangeText={(text) => handleChange(key, text)}
          />
        </View>
      ))}
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default PVInputForm;