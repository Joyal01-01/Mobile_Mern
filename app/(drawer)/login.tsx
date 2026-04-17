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
  Image,
} from "react-native";
import api from "../api";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    setLoading(true);
    try {
      const response = await api.post("/api/auth/login", { email, password });
      const token = response?.data?.token;
      if (token) {
        await AsyncStorage.setItem("authToken", token);
      }
      router.push("/home");
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Login failed. Please try again.";
      Alert.alert("Login Failed", message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      {/* Logo or Library Icon */}
      <View className="items-center mb-6">
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/100/000000/books.png" }}
          style={{ width: 80, height: 80 }}
        />
      </View>

      {/* Title */}
      <Text className="text-3xl font-bold text-center text-green-700 mb-2">
        Library Management System
      </Text>
      <Text className="text-base text-center text-gray-600 mb-8">
        Please login to access your account
      </Text>

      {/* Email Input */}
      <TextInput
        placeholder="Enter Library ID or Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
        placeholderTextColor="#888"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base"
        placeholderTextColor="#888"
      />

      {/* Login Button */}
      <TouchableOpacity
        onPress={handleLogin}
        disabled={loading}
        className="bg-green-700 py-3 rounded-xl"
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-center font-semibold text-lg">
            Login
          </Text>
        )}
      </TouchableOpacity>

      {/* Register Link */}
      <Text className="text-sm text-gray-500 text-center mt-6">
        Don’t have an account?{" "}
        <Text
          className="text-green-700 font-medium"
          onPress={() => router.push("/register")}
        >
          Register
        </Text>
      </Text>

      {/* Forgot Password */}
      <Text
        className="text-sm text-blue-600 text-center mt-3"
        onPress={() => router.push("/forgot-password")}
      >
        Forgot Password?
      </Text>
    </View>
  );
}
