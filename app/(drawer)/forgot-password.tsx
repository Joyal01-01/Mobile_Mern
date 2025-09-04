import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleReset() {
    if (email) {
      // Normally you'd call your backend API to send reset link
      alert("Password reset instructions sent to: " + email);
      router.push("/login"); // Redirect back to login
    } else {
      alert("Please enter your registered email.");
    }
  }

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-3xl font-bold text-center text-green-700 mb-2">
        Forgot Password
      </Text>
      <Text className="text-base text-center text-gray-600 mb-8">
        Enter your registered email to reset your password
      </Text>

      {/* Email Input */}
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base"
        placeholderTextColor="#888"
      />

      {/* Reset Button */}
      <TouchableOpacity
        onPress={handleReset}
        className="bg-green-700 py-3 rounded-xl"
      >
        <Text className="text-white text-center font-semibold text-lg">
          Send Reset Link
        </Text>
      </TouchableOpacity>

      {/* Back to Login */}
      <Text
        className="text-sm text-blue-600 text-center mt-6"
        onPress={() => router.push("/login")}
      >
        Back to Login
      </Text>
    </View>
  );
}
