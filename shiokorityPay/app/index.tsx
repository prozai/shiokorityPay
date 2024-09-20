import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Make Payment</Text>
      <Link href="./view/login" style={{color:'blue'}}>Go to Login</Link>
      <Link href="./view/payment" style={{color:'blue'}}>Payment</Link>
    </View>
  );
}   

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
});
