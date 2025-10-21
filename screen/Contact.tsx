import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from "react-native";

export default function ContactScreen() {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<"my" | "other">("my");

  return (
    <View style={styles.container}>
      {/* Header Section */}
            <Image 
            source={require('../banner.jpg')}
            style={styles.banner}
            />
      {/* Tab bar */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "my" && styles.activeTab]}
          onPress={() => setActiveTab("my")}
        >
          <Text style={[styles.tabText, activeTab === "my" && styles.activeTabText]}>
            My Contact
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "other" && styles.activeTab]}
          onPress={() => setActiveTab("other")}
        >
          <Text style={[styles.tabText, activeTab === "other" && styles.activeTabText]}>
            Other Contact
          </Text>
        </TouchableOpacity>
      </View>

      {/* Input search + tombol tambah */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari berdasarkan nama"
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Tambah</Text>
        </TouchableOpacity>
      </View>

      {/* Konten berdasarkan tab aktif */}
      <ScrollView style={{ flex: 1 }}>
        {activeTab === "my" ? (
          <>
          <TouchableOpacity // <-- Ini sudah menjadi card
            style={styles.card} 
            onPress={() => navigation.navigate("DetailContact", {
              name: "Dea Ananda",
              email: "dea.ananda@gmail.com",
              phone: "628182377228",
              gender: "Female",
              birthday: "07/12/2004",
              type: "Perorangan",
              ktp: "31756736378887",
              adviser: "Yohannes Affandy (Jojo)",
              createdAt: "December 21, 2022"
            })
          }
          >
            {/* Hapus <View style={styles.card}> yang ada di sini */}
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>DA</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>Dea Ananda</Text>
              <Text style={styles.detail}>dea.ananda@gmail.com</Text>
              <Text style={styles.detail}>628182377228</Text>
            </View>
            {/* Hapus </View> penutup yang ada di sini */}
          </TouchableOpacity>

          <View style={styles.card}>
          <View style={styles.avatar}><Text style={styles.avatarText}>MF</Text></View>
          <View style={styles.info}>
            <Text style={styles.name}>Mika Farrel</Text>
            <Text style={styles.detail}>mika.farrel@gmail.com</Text>
            <Text style={styles.detail}>628132778899</Text>
          </View>
        </View>
  
        <View style={styles.card}>
          <View style={styles.avatar}><Text style={styles.avatarText}>KH</Text></View>
          <View style={styles.info}>
            <Text style={styles.name}>Kevin Hartono</Text>
            <Text style={styles.detail}>kevin.hartono@example.com</Text>
            <Text style={styles.detail}>6281212345678</Text>
          </View>
        </View>
  
        <View style={styles.card}>
          <View style={styles.avatar}><Text style={styles.avatarText}>AL</Text></View>
          <View style={styles.info}>
            <Text style={styles.name}>Alya Lestari</Text>
            <Text style={styles.detail}>alya.lestari@gmail.com</Text>
            <Text style={styles.detail}>6287733499101</Text>
          </View>
        </View>
  
        <View style={styles.card}>
          <View style={styles.avatar}><Text style={styles.avatarText}>RS</Text></View>
          <View style={styles.info}>
            <Text style={styles.name}>Rian Saputra</Text>
            <Text style={styles.detail}>rian.saputra@domain.com</Text>
            <Text style={styles.detail}>6289988776655</Text>
          </View>
        </View>

        <View style={styles.card}>
        <View style={styles.avatar}><Text style={styles.avatarText}>NS</Text></View>
        <View style={styles.info}>
          <Text style={styles.name}>Nadia Sari</Text>
          <Text style={styles.detail}>nadia.sari@domain.com</Text>
          <Text style={styles.detail}>628111223344</Text>
        </View>
      </View>
      </>
        ) : (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>VT</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>Van Tomislav</Text>
              <Text style={styles.detail}>van.tomislav@example.com</Text>
              <Text style={styles.detail}>6285737334888</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F9FB" },
  header: {
    backgroundColor: "#0096FF",
    paddingVertical: 30,
    alignItems: "center",
  },
  headerText: { fontSize: 24, color: "#fff", fontWeight: "700" },

  tabContainer: {
    position: 'absolute',
    top: 220,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
  banner: {
    width: '100%',
    height: 250,
    marginBottom: 30,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#0096FF",
  },
  tabText: {
    fontSize: 16,
    color: "#999",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#0096FF",
    fontWeight: "700",
  },

  searchRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  addButton: {
    marginLeft: 8,
    backgroundColor: "#0096FF",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  addText: {
    color: "#fff",
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#0096FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  avatarText: { color: "#fff", fontWeight: "bold" },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "600" },
  detail: { color: "#555" },
});
