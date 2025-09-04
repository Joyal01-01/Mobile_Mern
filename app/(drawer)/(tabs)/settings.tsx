import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity, Alert, ScrollView } from "react-native";

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => console.log("User logged out") }
      ]
    );
  };

  const handleChangePassword = () => {
    Alert.alert("Change Password", "Navigate to Change Password screen");
  };

  const handleAppInfo = () => {
    Alert.alert("Library Management System", "Version 1.0.0\n© 2025 Library Inc.");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <TouchableOpacity style={styles.option} onPress={handleChangePassword}>
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>

      <View style={styles.option}>
        <Text style={styles.optionText}>Enable Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>

      <TouchableOpacity style={styles.option} onPress={handleAppInfo}>
        <Text style={styles.optionText}>About & Version</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, styles.logoutButton]} onPress={handleLogout}>
        <Text style={[styles.optionText, styles.logoutText]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  optionText: { fontSize: 16, color: "#333" },
  logoutButton: { backgroundColor: "#ff4d4d", justifyContent: "center" },
  logoutText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
