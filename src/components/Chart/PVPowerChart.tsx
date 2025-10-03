import React from "react";
import { View, Dimensions, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const PVPowerChart = ({ data = [], loading = false, title = "PV Power Output" }) => {
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
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#4f6d7a" />
        <Text style={{ marginTop: 10, color: "gray" }}>Loading PV data...</Text>
      </SafeAreaView>
    );
  }

  // Show fallback if no data
  if (labels.length === 0 || values.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 16, color: "gray" }}>
          No PV power data available
        </Text>
      </SafeAreaView>
    );
  }

  // Render chart when data is ready
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
          elevation: 3, // Android shadow
          alignItems: "center",
        }}
      >
        <LineChart
          data={{
            labels,
            datasets: [{ data: values }],
          }}
          width={screenWidth - 40}
          height={250}
          yAxisSuffix="W"
          chartConfig={{
            backgroundColor: "#4f6d7a",
            backgroundGradientFrom: "#6fa3b4",
            backgroundGradientTo: "#4f6d7a",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
            labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: { r: "4", strokeWidth: "2", stroke: "#ffa726" },
          }}
          bezier
          style={{ borderRadius: 16 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PVPowerChart;
