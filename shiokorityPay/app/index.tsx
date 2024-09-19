import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Link href="./view/login" style={{color:'blue'}}>Login</Link>
      </Text>
      <Text style={styles.text}>
        <Link href="./view/payment" style={{color:'blue'}}></Link>
      </Text>
      <Text style={styles.text}>
        <Link href="./view/payment" style={{color:'blue'}}>Payment</Link>
      </Text>
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