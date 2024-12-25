import { StyleSheet, View, Text, StatusBar } from 'react-native';


export default function HomeScreen() {
  return (
   <View style={styles.container}>
    <Text style={styles.title}>
      Home Page
    </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  title: {
    textAlign: "center",
    fontSize:34,
  }
});
