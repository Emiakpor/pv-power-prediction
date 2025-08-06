import { defaultStyles, utilsStyles,  } from "@/styles"

import { TouchableOpacity, Text, View, ScrollView, TextInput } from "react-native"
import { Picker } from '@react-native-picker/picker';
import React from "react";

const WeatherInputForm = () => {
      const [panelType, setPanelType] = React.useState('Monocrystalline');
      
    return (
        <ScrollView style={utilsStyles.content}>
            <Text style={utilsStyles.header}>Weather Input Form (via API)</Text>
        
          <Text style={utilsStyles.descriptionText}>Location (Lat, Long)</Text>
          <TextInput style={utilsStyles.textInput} placeholder="e.g., 6.5244, 3.3792" />
        
          <Text style={utilsStyles.descriptionText}>Current Irradiance (W/m²)</Text>
          <TextInput style={utilsStyles.textInput} keyboardType="numeric" placeholder="e.g., 800" />
        
          <Text style={utilsStyles.descriptionText}>Temperature (°C)</Text>
          <TextInput style={utilsStyles.textInput} keyboardType="numeric" placeholder="e.g., 30" />
        
          <Text style={utilsStyles.descriptionText}>Humidity (%)</Text>
          <TextInput style={utilsStyles.textInput} keyboardType="numeric" placeholder="e.g., 65" />
        
          <Text style={utilsStyles.descriptionText}>Wind Speed (m/s)</Text>
          <TextInput style={utilsStyles.textInput} keyboardType="numeric" placeholder="e.g., 2.5" />
        
          <Text style={utilsStyles.descriptionText}>Cloud Cover (%)</Text>
          <TextInput style={utilsStyles.textInput} keyboardType="numeric" placeholder="e.g., 20" />
        
            <TouchableOpacity>
                <Text style={utilsStyles.buttonText}>Prediction</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default WeatherInputForm;