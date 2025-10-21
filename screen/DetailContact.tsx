import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function DetailContact() {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const { name, email, phone, gender, birthday, type, ktp, adviser, createdAt } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Detail Contact</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.date}>Date Created : {createdAt}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.item}>Phone: {phone}</Text>
          <Text style={styles.item}>Email: {email}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text style={styles.item}>Type Contact: {type}</Text>
          <Text style={styles.item}>KTP: {ktp}</Text>
          <Text style={styles.item}>Birthday: {birthday}</Text>
          <Text style={styles.item}>Gender: {gender}</Text>
          <Text style={styles.item}>Adviser: {adviser}</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, { backgroundColor: "#007BFF" }]}>
            <Text style={styles.buttonText}>Share Access</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: "#FF4B4B" }]}>
            <Text style={styles.buttonText}>Delete Contact</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F9FB" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0096FF",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  backArrow: { color: "#fff", fontSize: 40, marginRight: 10, marginTop: 20 },
  headerText: { color: "#fff", fontSize: 25, fontWeight: "bold", paddingTop: 20, paddingLeft: 20 },
  scroll: { padding: 15 },
  date: { color: "#555", marginBottom: 10, textAlign: "center" },
  section: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  sectionTitle: { fontWeight: "700", fontSize: 16, marginBottom: 6, color: "#0096FF" },
  item: { color: "#333", marginVertical: 2 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});
