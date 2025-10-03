import React, { useState } from "react";
import { View, Dimensions, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const PVPowerChart = ({
  data = [],
  loading = false,
  title = "PV Power Output (W)",
}) => {
  const [viewMode, setViewMode] = useState("both"); // "predicted", "actual", "both"

  // Extract labels (hours from datetime if available)
  const allLabels = data.map((item) =>
    item?.datetime
      ? new Date(item.datetime).getHours().toString().padStart(2, "0") + "h"
      : ""
  );

  const predictedValues = data.map((item) =>
    typeof item?.predicted === "number"
      ? item.predicted
      : Number(item?.predicted) || 0
  );

  const actualValues = data.map((item) =>
    typeof item?.actual === "number" ? item.actual : Number(item?.actual) || 0
  );

  // Decide label step dynamically
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
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#4f6d7a" />
        <Text style={{ marginTop: 10, color: "gray" }}>Loading PV data...</Text>
      </SafeAreaView>
    );
  }

  // Show fallback if no data
  if (labels.length === 0 || (predictedValues.length === 0 && actualValues.length === 0)) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 16, color: "gray" }}>
          No PV power data available
        </Text>
      </SafeAreaView>
    );
  }

  // Build datasets and legend dynamically
  let datasets = [];
  let legend = [];
  if (viewMode === "predicted" || viewMode === "both") {
    datasets.push({ data: predictedValues, color: () => "#ff9800", strokeWidth: 2 });
    legend.push("Predicted");
  }
  if (viewMode === "actual" || viewMode === "both") {
    datasets.push({ data: actualValues, color: () => "#4caf50", strokeWidth: 2 });
    legend.push("Actual");
  }

  return (
    <SafeAreaView style={{ marginVertical: 20, paddingHorizontal: 10 }}>
      {/* Title */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: "#2c3e50",
          textAlign: "center",
          marginBottom: 15,
        }}
      >
        {title}
      </Text>

      {/* Chart Card */}
      <View
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 16,
          paddingVertical: 15,
          paddingHorizontal: 5,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 3 },
          elevation: 3,
          alignItems: "center",
        }}
      >
        <LineChart
          data={{
            labels,
            datasets,
            legend,
          }}
          width={screenWidth - 40}
          height={260}
          yAxisSuffix="W"
          chartConfig={{
            backgroundColor: "#4f6d7a",
            backgroundGradientFrom: "#6fa3b4",
            backgroundGradientTo: "#4f6d7a",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
            labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: { r: "4", strokeWidth: "2", stroke: "#fff" },
          }}
          bezier
          style={{ borderRadius: 16 }}
        />
      </View>

      {/* Toggle Buttons under the chart */}
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
        {["predicted", "actual", "both"].map((mode) => (
          <TouchableOpacity
            key={mode}
            onPress={() => setViewMode(mode)}
            style={{
              backgroundColor: viewMode === mode ? "#4f6d7a" : "#e0e0e0",
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderRadius: 20,
              marginHorizontal: 5,
            }}
          >
            <Text style={{ color: viewMode === mode ? "#fff" : "#333", fontWeight: "500" }}>
              {mode === "predicted"
                ? "Predicted"
                : mode === "actual"
                ? "Actual"
                : "Both"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default PVPowerChart;
