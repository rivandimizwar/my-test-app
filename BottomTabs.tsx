import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, StyleSheet } from 'react-native';

// Import Halaman
import HomeScreen from './screen/HomeScreen';
import Contact from './screen/Contact';
import Loan from './screen/Loan';
import Product from './screen/Product';
import Bank from './screen/Bank';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    height: 80,
                    borderTopWidth: 1,
                    borderTopColor: '#e0e0e0',
            },
            tabBarIcon: ({ focused }) => {
                let iconSource;

                if (route.name === 'Home') {
                    iconSource = require('./home_5972799.png');
                } else if (route.name === 'Contact') {
                    iconSource = require('./layer_10613645.png');
                } else if (route.name === 'Loan') {
                    iconSource = require('./file_15704144.png');
                } else if (route.name === 'Product') {
                    iconSource = require('./product_13368825.png');
                } else if (route.name === 'Bank') {
                    iconSource = require('./medal_7955306.png');
                }

                return (
                    <Image source={iconSource} style={[styles.icon, { tintColor: focused ? '#007AFF' : '#555' }]} />
                  );
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: '#555',
              })}
            >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Contact" component={Contact} />
              <Tab.Screen name="Loan" component={Loan} />
              <Tab.Screen name="Product" component={Product} />
              <Tab.Screen name="Bank" component={Bank} />
        </Tab.Navigator>
    );
}
        
        const styles = StyleSheet.create({
          icon: {
            width: 22,
            height: 22,
            resizeMode: 'contain',
          },
        });

        export default BottomTabs;