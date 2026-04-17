import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import api from "../api";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [libraryId, setLibraryId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!name || !libraryId || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const response = await api.post("/api/auth/register", { name, libraryId, email, password });
      const token = response?.data?.token;
      if (token) {
        await AsyncStorage.setItem("authToken", token);
      }
      Alert.alert("Success", "Account created successfully!");
      router.push("/home");
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Registration failed. Please try again.";
      Alert.alert("Registration Failed", message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView className="flex-1 px-6 bg-white">
      <View className="mt-16">
        <Text className="text-3xl font-bold text-center text-green-700 mb-2">
          Create Account
        </Text>
        <Text className="text-base text-center text-gray-600 mb-8">
          Register to access the Library Management System
        </Text>

        {/* Full Name */}
        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
          placeholderTextColor="#888"
        />

        {/* Library ID */}
        <TextInput
          placeholder="Library ID"
          value={libraryId}
          onChangeText={setLibraryId}
          autoCapitalize="none"
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
          placeholderTextColor="#888"
        />

        {/* Email */}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
          placeholderTextColor="#888"
        />

        {/* Password */}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
          placeholderTextColor="#888"
        />

        {/* Confirm Password */}
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base"
          placeholderTextColor="#888"
        />

        {/* Register Button */}
        <TouchableOpacity
          onPress={handleRegister}
          disabled={loading}
          className="bg-green-700 py-3 rounded-xl"
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-center font-semibold text-lg">
              Sign Up
            </Text>
          )}
        </TouchableOpacity>

        {/* Back to Login */}
        <Text className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <Text
            className="text-green-700 font-medium"
            onPress={() => router.push("/login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
