// App.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Impor komponen Anda
import BottomTabs from './BottomTabs';
import DetailContact from './screen/DetailContact';

// Buat Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Layar 1: Bottom Tabs Anda */}
        <Stack.Screen 
          name="MainTabs" // Beri nama untuk grup tab Anda
          component={BottomTabs}
          options={{ headerShown: false }} // Sembunyikan header stack di layar tab
        />

        {/* Layar 2: Layar Detail Contact */}
        <Stack.Screen 
          name="DetailContact" // Nama ini HARUS SAMA dengan yang di navigation.navigate()
          component={DetailContact}
          options={{ headerShown: false }} // Header-nya sudah ada di dalam file DetailContactScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}