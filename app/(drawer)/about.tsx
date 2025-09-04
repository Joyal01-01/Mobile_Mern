import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.subtitle}>
          Our Library Management System helps users organize, access, and manage books efficiently.
        </Text>
      </View>

      {/* Who We Are */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Who We Are</Text>
        <Text style={styles.sectionText}>
          We are a dedicated team committed to simplifying library operations and enhancing the reading experience. Our platform enables seamless management and access to books for students, educators, and enthusiasts.
        </Text>
      </View>

      {/* What We Do */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What We Do</Text>
        <Text style={styles.sectionText}>
          Our system provides:
        </Text>
        <View style={{ paddingLeft: 10, marginTop: 5 }}>
          <Text style={styles.sectionText}>• Browse and search available books efficiently.</Text>
          <Text style={styles.sectionText}>• Add books with full details including title, author, ISBN, and description.</Text>
          <Text style={styles.sectionText}>• Manage borrowers, track issued books, and handle returns.</Text>
          <Text style={styles.sectionText}>• Maintain complete library records seamlessly.</Text>
        </View>
      </View>

      {/* Our Mission */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          To provide a robust, easy-to-use digital library system that makes knowledge accessible, organized, and enjoyable for all users.
        </Text>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionText}>
          Email: support@librarysystem.com{"\n"}
          Phone: +977-9800000000{"\n"}
          Website: www.librarysystem.com
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
});
