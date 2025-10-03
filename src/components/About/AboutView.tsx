import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { styles } from "@/styles/about_view_style"

const AboutView = () =>  {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4f6d7a" }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About Us</Text>
        <Text style={styles.headerSubtitle}>
          Learn more about our mission and vision
        </Text>
      </View>

      {/* Scrollable content */}
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Company Image / Logo */}
        <Image
          source={{
            uri: "https://picsum.photos/400/200",
          }}
          style={styles.banner}
        />

        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.paragraph}>
          Our mission is to provide intelligent energy solutions that optimize
          solar power generation, making renewable energy more accessible,
          efficient, and reliable for communities and businesses worldwide.
        </Text>

        <Text style={styles.sectionTitle}>Our Vision</Text>
        <Text style={styles.paragraph}>
          We envision a sustainable future where every building, home, and
          industry maximizes its renewable energy potential through smart
          platforms, data-driven insights, and innovative technology.
        </Text>

        <Text style={styles.sectionTitle}>Our Values</Text>
        <Text style={styles.paragraph}>
          • Innovation: Continuously improving our solutions with cutting-edge
          technology.{"\n"}
          • Sustainability: Committed to a greener, cleaner planet.{"\n"}
          • Reliability: Delivering accurate, real-time energy insights.{"\n"}
          • Collaboration: Working with partners to maximize impact.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.paragraph}>
          Email: contact@yourcompany.com{"\n"}
          Phone: +234 800 123 4567{"\n"}
          Address: 123 Solar Avenue, Lagos, Nigeria
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutView