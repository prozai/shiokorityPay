import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import ConsumerController from '../controller/consumerController';

const EditPaymentMethodScreen: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);
  const [editingMethod, setEditingMethod] = useState<{ id: number; cardNumber: string; expiryDate: string; cvv: string } | null>(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  const fetchPaymentMethods = async () => {
    try {
      const methods = await ConsumerController.handleGetPaymentMethod();
      setPaymentMethods(methods);
      console.log(methods); // Debug log
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch payment methods');
    }
  };

  const handleEdit = (method: any) => {
    setEditingMethod(method);
    setCardNumber(method.cardNumber);
    setExpiryDate(method.expiryDate);
    setCvv(method.cvv);
  };

  const handleSaveEdit = async () => {
    if (editingMethod) {
      try {
        await ConsumerController.handleUpdatePaymentMethod(editingMethod.id, { cardNumber, expiryDate, cvv });
        Alert.alert('Success', 'Payment method updated successfully');
        fetchPaymentMethods(); // Refresh the list
        setEditingMethod(null);
        clearInputs();
      } catch (error) {
        Alert.alert('Error', 'Failed to update payment method');
      }
    }
  };

  const clearInputs = () => {
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  const handleDelete = async (id: number) => {
    try {
      await ConsumerController.handleDeletePaymentMethod(id);
      Alert.alert('Success', 'Payment method deleted successfully');
      fetchPaymentMethods(); // Refresh the list
    } catch (error) {
      Alert.alert('Error', 'Failed to delete payment method');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {editingMethod ? (
        <>
          <Text>Edit Payment Method</Text>
          <TextInput value={cardNumber} onChangeText={setCardNumber} placeholder="Card Number" />
          <TextInput value={expiryDate} onChangeText={setExpiryDate} placeholder="Expiry Date" />
          <TextInput value={cvv} onChangeText={setCvv} placeholder="CVV" secureTextEntry />
          <Button title="Save" onPress={handleSaveEdit} />
          <Button title="Cancel" onPress={() => { setEditingMethod(null); clearInputs(); }} />
        </>
      ) : (
        <FlatList
          data={paymentMethods}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 10 }}>
              <Text>Card Number: {item.cardNumber}</Text>
              <Text>Expiry Date: {item.expiryDate}</Text>
              <Text>CVV: {item.cvv}</Text>
              <Button title="Edit" onPress={() => handleEdit(item)} />
              <Button title="Delete" onPress={() => handleDelete(item.id)} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default EditPaymentMethodScreen;