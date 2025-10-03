import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const TopRightMenuView = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      {/* Menu Button */}
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.menuButton}
      >
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      {/* Modal Menu */}
      <Modal
        transparent
        animationType="fade"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => setVisible(false)}
        >
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push("/(tabs)/chart")}
            >
              <Text style={styles.menuText}>Chart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push("/(tabs)/analytics")}
            >
              <Text style={styles.menuText}>Analytics</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push("/(tabs)/report")}
            >
              <Text style={styles.menuText}>Reports</Text>
            </TouchableOpacity>
            {/* Add more menu items here */}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    right: 16,
    zIndex: 1000,
  },
  menuButton: {
    backgroundColor: "#4f6d7a",
    padding: 10,
    borderRadius: 8,
  },
  menuIcon: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 50,
    paddingRight: 16,
  },
  menu: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 8,
    width: 160,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  menuText: {
    fontSize: 16,
    color: "#2d3436",
  },
});

export default TopRightMenuView;
