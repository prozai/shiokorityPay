import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import ConsumerController from '../controller/consumerController'; // Update the import

const SavePaymentMethodScreen: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSave = async () => {
    const paymentMethod = { cardNumber, expiryDate, cvv };
    await ConsumerController.handleSavePaymentMethod(paymentMethod); // Update the function call
    Alert.alert('Success', 'Payment method saved successfully');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter Payment Method</Text>
      
      <TextInput
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      
      <TextInput
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      
      <TextInput
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        secureTextEntry
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      
      <Button title="Save Payment Method" onPress={handleSave} />
    </View>
  );
};

export default SavePaymentMethodScreen;