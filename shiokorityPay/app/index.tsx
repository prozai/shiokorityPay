import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function App() {
  return (
    <View>
      <Text>Make Payment</Text>
      <Link href="./view/login" style={{color:'blue'}}>Go to Login</Link>
      <Link href="./view/payment" style={{color:'blue'}}>Payment</Link>
    </View>
  );
}