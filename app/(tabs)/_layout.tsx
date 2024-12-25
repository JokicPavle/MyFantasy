import { Link, Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';



export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);
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
<Tabs.Screen
  name="moreMenu" 
  options={{
    tabBarButton: (props) => (
      <Pressable
        onPress={() => setModalVisible((prev) => !prev)} 
        style={({ pressed }) => [
          props.style,
          { opacity: pressed ? 0.6 : 1 },
          { flexDirection: 'column', alignItems: 'center' }, 
        ]}
      >
        <Ionicons size={26} name="ellipsis-vertical" color="gray" />
        <Text style={{ color: 'gray', fontSize: 12 }}>More</Text>
      </Pressable>
    ),
  }}
/>

          </Tabs>
           {/* Modal */}
      {modalVisible && (
          <View style={styles.modalContainer} pointerEvents="box-none">
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Menu</Text>
            <Link href="../screens/schedule" style={styles.menuItem} onPress={() => setModalVisible(false)}>
              Schedule
            </Link>
            <Link href="../screens/leaders" style={styles.menuItem} onPress={() => setModalVisible(false)}>
              Leaders
            </Link>
            <Link href="../screens/defenseVSposition" style={styles.menuItem} onPress={() => setModalVisible(false)}>
              Defense vs Position
            </Link>
            <Link href="../screens/standings" style={styles.menuItem} onPress={() => setModalVisible(false)}>
              Standings
            </Link>
            <Link href="../screens/rules" style={styles.menuItem} onPress={() => setModalVisible(false)}>
              Rules
            </Link>
            <Link href="../screens/prizes" style={styles.menuItem} onPress={() => setModalVisible(false)}>
              Prizes
            </Link>
            <Link href="../screens/contactUs" style={styles.menuItem} onPress={() => setModalVisible(false)}>
              Contact Us
            </Link>
          </View>
        </View>
      )}
      </>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 80,
    justifyContent: 'flex-end',
    zIndex: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 10,
    color: 'blue',
  },
});

function createStackNavigator() {
  throw new Error('Function not implemented.');
}
