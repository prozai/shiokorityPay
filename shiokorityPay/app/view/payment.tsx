import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

const payment = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Payment</Text>
    </View>
  )
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

export default payment
