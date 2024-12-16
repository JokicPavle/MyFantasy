import { View, Text, StyleSheet, Button } from "react-native";

const MoreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DashboardScreen</Text>
    </View>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
