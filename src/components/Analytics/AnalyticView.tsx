import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet , SafeAreaView} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "@/styles/panel_parameters_style";

const AnalyticView = () => {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const storedMetrics = JSON.parse(
        (await AsyncStorage.getItem("metrics")) || "null"
      );
      setMetrics(storedMetrics);
    };
    fetchData();
  }, []);

  if (!metrics) {
    return (
      <View style={current_styles.center}>
        <Text style={current_styles.noData}>No analytics data available</Text>
      </View>
    );
  }

  return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#4f6d7a" }}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Panel Parameters</Text>
            <Text style={styles.headerSubtitle}>
              Enter your panel specifications
            </Text>
          </View>
    

    <ScrollView style={styles.container}>
      <Text style={current_styles.title}>📊 Analytics Report</Text>

      <View style={current_styles.card}>
        <Text style={current_styles.label}>Mean Absolute Error (MAE)</Text>
        <Text style={current_styles.value}>{metrics.MAE.toFixed(3)}</Text>
      </View>

      <View style={current_styles.card}>
        <Text style={current_styles.label}>Mean Squared Error (MSE)</Text>
        <Text style={current_styles.value}>{metrics.MSE.toFixed(3)}</Text>
      </View>

      <View style={current_styles.card}>
        <Text style={current_styles.label}>Root Mean Squared Error (RMSE)</Text>
        <Text style={current_styles.value}>{metrics.RMSE.toFixed(3)}</Text>
      </View>

      <View style={current_styles.card}>
        <Text style={current_styles.label}>R² Score</Text>
        <Text style={current_styles.value}>{metrics.R2.toFixed(3)}</Text>
      </View>
    </ScrollView>
    </SafeAreaView>

  );
};

const current_styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noData: {
    fontSize: 16,
    color: "#636e72",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2d3436",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    fontSize: 14,
    color: "#636e72",
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0984e3",
  },
});

export default AnalyticView;
