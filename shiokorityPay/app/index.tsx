import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function App() {
  return (
    <View>
      <Text>Make Payment</Text>
      <Link href="./view/login" style={{color:'blue'}}>Go to Login</Link>
      <Link href="./view/payment" style={{color:'blue'}}>Payment</Link>
      <Link href="./view/savePaymentMethod" style={{color:'blue'}}>Save Payment Method</Link>
      <Link href="./view/viewPaymentMethod" style={{color:'blue'}}>View Payment Method</Link>
      {/* <Link href="./view/editPaymentMethod" style={{color:'blue'}}>Edit Payment Method</Link> */}
    </View>
  );
}