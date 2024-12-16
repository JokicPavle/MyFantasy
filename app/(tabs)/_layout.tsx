import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { createDrawerNavigator } from "@react-navigation/drawer";
import MoreScreen from '../screens/MoreScreen';
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const Drawer = createDrawerNavigator();
  return (
    <>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name={"home"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }) => <Ionicons size={28} name={"stats-chart"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="lineups"
        options={{
          title: 'Lineups',
          tabBarIcon: ({ color }) => <Ionicons size={28} name={"bag"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: ({ color }) => <Ionicons size={28} name={"newspaper"} color={color} />,
        }}
      />
      <Drawer.Screen 
         name="Dashboard"
         component={MoreScreen}
         options={{
           title: "...",
           drawerLabel: "Dashboard label",
           drawerActiveTintColor: "#333",
           drawerActiveBackgroundColor: "lightblue",
           drawerContentStyle: {
             backgroundColor: "#c6cbef",
            },
          }}/>
          </Tabs>
      </>
  );
}
