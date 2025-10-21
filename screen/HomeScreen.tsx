import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Image 
      source={require('../banner.jpg')}
      style={styles.banner}
      />
      <View style={styles.profileCard}>
        <Image
          source={require('../profile_home.png')}
          style={styles.profileImage}
        />
        <Text style={styles.welcome}>Welcome Back,</Text>
        <Text style={styles.name}>Rivandi Mizwar</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Loan Market Mobile Dev</Text>
          <Text style={styles.infoText}>rivandi@loanmarket.co.id</Text>
          <Text style={styles.infoText}>ID: LM999001</Text>
      </View>
      </View>

      {/* Track Section */}
      <View style={styles.cardContainer}>
        <View style={styles.row}>
          {/* Contact */}
          <View style={styles.cardItem}>
            <Image source ={require('../layer_10613645.png')} style={styles.iconPlaceholderStyle} />
            <Text style={styles.cardLabel}>Contact</Text>
            <Text style={styles.cardValue}>41</Text>
          </View>

        {/* Loan */}
        <View style={styles.cardItem}>
        <Image source ={require('../file_15704144.png')} style={styles.iconPlaceholderStyle} />
            <Text style={styles.cardLabel}>Loan</Text>
            <Text style={styles.cardValue}>50</Text>
          </View>
        </View>

        <View style={styles.row}>
          {/* Product */}
          <View style={styles.cardItem}>
            <Image source ={require('../product_13368825.png')} style={styles.iconPlaceholderStyle} />
            <Text style={styles.cardLabel}>Product</Text>
            <Text style={styles.cardValue}>73</Text>
          </View>

          {/* Bank */}
          <View style={styles.cardItem}>
            <Image source ={require('../medal_7955306.png')} style={styles.iconPlaceholderStyle} />
            <Text style={styles.cardLabel}>Bank</Text>
            <Text style={styles.cardValue}>28</Text>
          </View>
        </View>
      </View>

      {/* Pinjaman Section */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Pinjaman Disetujui</Text>
        <Text style={styles.summaryValue}>2 / 5 Pinjaman</Text>

        <Text style={[styles.summaryTitle, { marginTop: 10 }]}>Target</Text>
        <Text style={styles.summaryValue}>280%</Text>
        <Text style={styles.summarySub}>
          Rp14.000.000.000 / 5.000.000.000
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  banner: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  profileCard: {
    marginTop: -100,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 20,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  welcome: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#777',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#666',
  },
  cardContainer: {
    marginTop: 20,
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    alignSelf: 'center',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12},
  cardItem: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  iconPlaceholderStyle: {
    width: 28,
    height: 28,
    marginBottom: 6,
  },
  iconPlaceholder: {
    width: 30,
    height: 30,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    marginBottom: 6,
  },
  cardLabel: { fontSize: 13, color: '#333' },
  cardValue: { fontSize: 14, fontWeight: 'bold', color: '#007AFF' },

  summaryCard: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    alignSelf: 'center',
    padding: 16,
    elevation: 3,
    marginTop: 16,
    alignItems: 'center',
  },
  summaryTitle: { fontSize: 14, color: '#555' },
  summaryValue: { fontSize: 18, fontWeight: '700', color: '#007AFF' },
  summarySub: { fontSize: 13, color: '#999' },
});

export default HomeScreen;
