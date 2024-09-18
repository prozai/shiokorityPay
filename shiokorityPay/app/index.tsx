import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function App() {
  return (
    <View>
      <Text>hello how are you doing</Text>
      <Text>I want to do login page</Text>
      <Link href="/login" style={{color:'blue'}}>Go to Login</Link>
    </View>
  );
}