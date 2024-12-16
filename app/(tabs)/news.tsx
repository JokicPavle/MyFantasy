import { StyleSheet, View, Text, StatusBar } from 'react-native';


export default function NewsScreen() {
  return (
   <View style={styles.container}>
    <Text style={styles.title}>
      News Page
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
