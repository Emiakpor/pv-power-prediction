import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Button,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { styles } from "@/styles/chart_view_style"

const screenWidth = Dimensions.get("window").width;

const PredictedChartPage =() => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ predicted: [], actual: [], labels: [] });

  const fetchData = async () => {
    setLoading(true);
    try {
      // Replace with your API endpoint
      const response = await fetch("https://your-api-endpoint.com/predictions");
      const result = await response.json();

      // Assuming API returns:
      // { predicted: [..], actual: [..], timestamps: [..] }
      setData({
        predicted: result.predicted || [120, 130, 125],
        actual: result.actual || [118, 128, 126],
        labels: result.timestamps || ["08:00", "09:00", "10:00"],
      });
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to fetch data from API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Predicted vs Actual PV Power</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#4f6d7a" style={{ marginTop: 50 }} />
      ) : data.predicted.length === 0 ? (
        <Text style={{ marginTop: 50, textAlign: "center" }}>No data available</Text>
      ) : (
        <LineChart
          data={{
            labels: data.labels,
            datasets: [
              {
                data: data.predicted,
                color: (opacity = 1) => `rgba(76, 109, 122, ${opacity})`,
                strokeWidth: 2,
                // name: "Predicted",
              },
              {
                data: data.actual,
                color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                strokeWidth: 2,
                // name: "Actual",
              },
            ],
            legend: ["Predicted", "Actual"],
          }}
          width={screenWidth - 40} // chart width
          height={300}
          yAxisSuffix=" W"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#f7f7f7",
            backgroundGradientFrom: "#f7f7f7",
            backgroundGradientTo: "#f7f7f7",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(76, 109, 122, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "3",
              strokeWidth: "1",
              stroke: "#4f6d7a",
            },
          }}
          bezier
          style={{
            marginVertical: 20,
            borderRadius: 16,
          }}
        />
      )}

      <Button title="Refresh Data" onPress={fetchData} color="#4f6d7a" />
    </ScrollView>
  );
}

export default PredictedChartPage;

