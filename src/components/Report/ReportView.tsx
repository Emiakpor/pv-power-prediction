import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "@/styles/panel_parameters_style";

const ReportView = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const stored = JSON.parse(
        (await AsyncStorage.getItem("actual_pred_data")) || "[]"
      );
      setData(stored);
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return (
      <View style={current_styles.center}>
        <Text style={current_styles.noData}>No report data available</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Panel Parameters</Text>
                <Text style={styles.headerSubtitle}>
                  Enter your panel specifications
                </Text>
              </View>
    <ScrollView style={current_styles.container}>
      <Text style={current_styles.title}>📑 Prediction Report</Text>

      {data.map((item, index) => (
        <View key={index} style={current_styles.card}>
          <Text style={current_styles.datetime}>{item.datetime}</Text>

          <View style={current_styles.row}>
            <Text style={current_styles.label}>Predicted:</Text>
            <Text style={current_styles.value}>{item.predicted}</Text>
          </View>

          <View style={current_styles.row}>
            <Text style={current_styles.label}>Actual:</Text>
            <Text style={current_styles.value}>{item.actual}</Text>
          </View>
        </View>
      ))}
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
  datetime: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0984e3",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: "#636e72",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d3436",
  },
});

export default ReportView;
