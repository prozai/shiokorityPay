import { Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
// import shiokorityPayIcon from "@/assets/images/icon.png";

const App = () => {
  return (
    <View>

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

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown:false }} />
    </Stack>
  );
}
