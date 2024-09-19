import { Text, View, StyleSheet ,Image, SafeAreaView} from "react-native";
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Flexible</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae dictum turpis. Fusce hendrerit quam vel.</Text>
      </SafeAreaView>
      {/* <Image source={shiokorityPayIcon} style={{ width: 200, height: 200 }} /> */}
      <Text style={styles.text}>Login</Text>
      <Text style={styles.text}>Payment</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    padding: 10,
    fontSize: 30
  }
});