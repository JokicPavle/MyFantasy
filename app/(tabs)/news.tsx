import { StyleSheet, View, Text, StatusBar, Platform } from 'react-native';


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
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 60,

  },
  title: {
    textAlign: "center",
    fontSize:34,
  }
});
