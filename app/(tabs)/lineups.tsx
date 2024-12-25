import { StyleSheet, View, Text, StatusBar } from 'react-native';


export default function LineupsScreen() {
  return (
   <View style={styles.container}>
    <Text style={styles.title}>
      Lineups Page
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
