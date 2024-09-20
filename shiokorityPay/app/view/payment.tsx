import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ConsumerController from '../controller/consumerController';

const PaymentView: React.FC = () => {
  const [merchantId, setMerchantId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handlePayment = async () => {
    setStatus('Processing payment...');
    const merchantIdInt = parseInt(merchantId, 10);
    const { isValid, errors } = ConsumerController.validatePayment(merchantIdInt, parseFloat(amount));

    if (isValid) {
      try {
        await ConsumerController.processPayment({ merchantId: merchantIdInt, amount: parseFloat(amount) });
        setStatus('Payment successful');
      } catch (error) {
        setStatus('Payment failed');
      }
    } else {
      setStatus('Validation failed: ' + errors.join(', '));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Merchant ID"
        value={merchantId}
        onChangeText={setMerchantId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Pay" onPress={handlePayment} />
      {status && <Text style={styles.status}>{status}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  status: {
    marginTop: 10,
    color: 'blue',
  },
});

export default PaymentView;