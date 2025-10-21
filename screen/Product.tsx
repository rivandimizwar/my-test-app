import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

export default function ProductScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      {/* Banner DI LUAR container */}
      <Image
        source={require("../banner.jpg")}
        style={styles.banner}
      />

      {/* Container utama untuk konten */}
      <View style={styles.container}>
        {/* Header Filter */}
        <View style={styles.header}>
          <TextInput placeholder="Cari nama bank" style={styles.searchInput} />

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>+ Tambah</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.sortButton}>
            <Image source={require("../filter.png")} style={styles.iconSmall} />
            <Text style={styles.sortText}>Sort</Text>
          </TouchableOpacity>
        </View>

        {/* Dropdown Filter */}
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>ALL</Text>
          <Image source={require("../dropdown.png")} style={styles.iconSmall} />
        </View>

        {/* Horizontal Card Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
          {/* Card 1 */}
          <View style={styles.card}>
            <Image source={require("../mandiri_logo.png")} style={styles.logo} />
            <Text style={styles.cardTitle}>Mandiri Bunga Spesial Tengah Inlet 2023</Text>

            <View style={styles.ratingRow}>
              <Image source={require("../star.png")} style={styles.starIcon} />
              <Image source={require("../star.png")} style={styles.starIcon} />
              <Image source={require("../star.png")} style={styles.starIcon} />
              <Text style={styles.smallText}> 14 Reviews</Text>
            </View>

            <Text style={styles.smallText}>User: 220 (Yearly)</Text>
            <Text style={styles.detailText}>
              <Text style={{ fontWeight: "bold" }}>Max Tenor:</Text> 12 tahun
            </Text>
            <Text style={styles.detailText}>
              <Text style={{ fontWeight: "bold" }}>Target:</Text> Karyawan, Pengusaha
            </Text>

            <TouchableOpacity style={styles.detailButton}>
              <Text style={styles.detailButtonText}>Detail</Text>
            </TouchableOpacity>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <Image source={require("../bca_logo.png")} style={styles.logo} />
            <Text style={styles.cardTitle}>BCA Kredit Gebyar Produktif 2023</Text>

            <View style={styles.ratingRow}>
              <Image source={require("../star.png")} style={styles.starIcon} />
              <Image source={require("../star.png")} style={styles.starIcon} />
              <Image source={require("../star.png")} style={styles.starIcon} />
              <Image source={require("../star.png")} style={styles.starIcon} />
              <Text style={styles.smallText}> 22 Reviews</Text>
            </View>

            <Text style={styles.smallText}>User: 310 (Yearly)</Text>
            <Text style={styles.detailText}>
              <Text style={{ fontWeight: "bold" }}>Max Tenor:</Text> 10 tahun
            </Text>
            <Text style={styles.detailText}>
              <Text style={{ fontWeight: "bold" }}>Target:</Text> Profesional, Freelancer
            </Text>

            <TouchableOpacity style={styles.detailButton}>
              <Text style={styles.detailButtonText}>Detail</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  addText: {
    color: "#fff",
    fontSize: 13,
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  sortText: {
    marginLeft: 4,
    color: "#333",
  },
  iconSmall: {
    width: 16,
    height: 16,
    tintColor: "#333",
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 12,
  },
  dropdownText: {
    marginRight: 4,
    color: "#333",
  },
  scroll: {
    flexGrow: 0,
  },
  card: {
    width: 240,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 5,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 2,
  },
  smallText: {
    fontSize: 12,
    color: "#555",
  },
  detailText: {
    fontSize: 12,
    color: "#444",
    marginTop: 3,
  },
  detailButton: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
  },
  detailButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
});
