import { defaultStyles, utilsStyles,  } from "@/styles"

import { TouchableOpacity, Text, View, ScrollView, TextInput, KeyboardAvoidingView } from "react-native"
import { Picker } from '@react-native-picker/picker';
import React from "react";
import { Link } from "expo-router";

const SolarInputForm = () => {
      const [panelType, setPanelType] = React.useState('Monocrystalline');
      const onPredict = () =>{

      };

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={10}>
          <ScrollView style={utilsStyles.content}>
            {/* <Text style={utilsStyles.header}>PV Panel Details</Text> */}
        
            <Text style={utilsStyles.descriptionText}>Panel Type</Text>        
          <Picker  style={utilsStyles.picker}
            selectedValue={panelType}
            onValueChange={(itemValue) => setPanelType(itemValue)}
          >
            <Picker.Item label="Monocrystalline" value="Monocrystalline" />
            <Picker.Item label="Polycrystalline" value="Polycrystalline" />
            <Picker.Item label="Thin Film" value="ThinFilm" />
          </Picker>
          <Text style={utilsStyles.descriptionText}>Panel Rated Power (W)</Text>
          <TextInput style={utilsStyles.textInput} keyboardType="numeric" placeholder="e.g., 330" />        
          
          <Text style={utilsStyles.descriptionText}>Number of Panels</Text>
          <TextInput style={utilsStyles.textInput} keyboardType="numeric" placeholder="e.g., 10" />
        
          <Text style={utilsStyles.descriptionText}>Tilt Angle (degrees)</Text>
          <TextInput style={utilsStyles.textInput} keyboardType="numeric" placeholder="e.g., 30" />
        
          <Text style={utilsStyles.descriptionText}>Azimuth Angle (degrees)</Text>
          <TextInput style={utilsStyles.textInput} keyboardType="numeric" placeholder="e.g., 180" />  
          <TouchableOpacity style={[utilsStyles.pillButton, utilsStyles.button, utilsStyles.marginTop20]}
          onPress={onPredict}>
                <Text style={utilsStyles.buttonText}>Prediction</Text>
          </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SolarInputForm;