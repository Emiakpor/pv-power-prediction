import React from "react";
import { View, Dimensions, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const PVPowerChart = ({ data = [], loading = false , title=""}) => {
  // Extract labels (hours from datetime if available)
  const allLabels = data.map((item) =>
    item?.datetime
      ? new Date(item.datetime).getHours().toString().padStart(2, "0") + "h"
      : ""
  );

  const values = data.map((item) =>
    typeof item?.value === "number" ? item.value : Number(item?.value) || 0
  );

  // Decide label step dynamically to avoid crowding
  let step = 1;
  if (allLabels.length > 12) step = 2;
  if (allLabels.length > 24) step = 3;
  if (allLabels.length > 48) step = 6;

  const labels = allLabels.map((label, index) =>
    index % step === 0 ? label : ""
  );

  // Show spinner if loading
  if (loading) {
    return (
      <SafeAreaView style={{ marginVertical: 20, alignItems: "center" }}>
        <ActivityIndicator size="large" color="#4f6d7a" />
        <Text style={{ marginTop: 10, color: "gray" }}>Loading PV data...</Text>
      </SafeAreaView>
    );
  }

  // Show fallback if no data
  if (labels.length === 0 || values.length === 0) {
    return (
      <SafeAreaView style={{ marginVertical: 20 }}>
        <Text style={{ textAlign: "center", fontSize: 16, color: "gray" }}>
          No PV power data available
        </Text>
      </SafeAreaView>
    );
  }

  // Render chart when data is ready
  return (
    <SafeAreaView
      style={{
        marginVertical: 20,
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <LineChart
        data={{
          labels,
          datasets: [{ data: values }],
        }}
        width={screenWidth - 20}
        height={250}
        yAxisSuffix="W"
        chartConfig={{
          backgroundColor: "#1E2923",
          backgroundGradientFrom: "#4f6d7a",
          backgroundGradientTo: "#6fa3b4",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
          labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
          style: { borderRadius: 16 },
          propsForDots: { r: "4", strokeWidth: "2", stroke: "#ffa726" },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          // transform: [{ rotate: "-90deg" }] 
        }}
      />
    </SafeAreaView>
  );
};

export default PVPowerChart;
