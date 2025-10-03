import { defaultStyles } from "@/styles";
import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/panel_parameters_style";
import PVPowerChart from "@/components/Chart/PVPowerChart";
import MultipleChart from "@/components/Chart/MultipleChart";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChartScreen = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [actualPredictedData, setActualPredictedData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("predict_data");
        const storedActualPredictedData = await AsyncStorage.getItem("actual_pred_data");
        if (storedData) {
          setData(JSON.parse(storedData));
          setActualPredictedData(JSON.parse(storedActualPredictedData));
        }
      } catch (err) {
        
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4f6d7a" }}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Prediction</Text>
            </View>
      <MultipleChart
        data={actualPredictedData}
        loading={loading}
      />

      
    </SafeAreaView>
  );
};

export default ChartScreen;
