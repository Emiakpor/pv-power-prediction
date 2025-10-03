import { styles } from "@/styles/home_view_style"
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const HomeView = () => {
    const router = useRouter();
    return (
      <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome Home</Text>
        <Text style={styles.headerSubtitle}>Dashboard</Text>
      </View>      

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Cards / Sections */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Profile</Text>
          <Text style={styles.cardSubtitle}>View and edit your profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push("/(tabs)/chart")}>
          <Text style={styles.cardTitle}>Predictions</Text>
          <Text style={styles.cardSubtitle}>Check PV power predictions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Settings</Text>
          <Text style={styles.cardSubtitle}>Configure app preferences</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.cardTitle}>Reports</Text>
          <Text style={styles.cardSubtitle}>View analytics and reports</Text>
        </TouchableOpacity>

        {/* Example Image */}
        <Image
          source={{
            uri: "https://picsum.photos/400/200",
          }}
          style={styles.banner}
        />
      </ScrollView>
    </SafeAreaView>
    )
}

export default HomeView