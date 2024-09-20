import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, FlatList } from 'react-native';
import ConsumerController from '../controller/consumerController';

const ViewPaymentMethodScreen: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState<{ cardNumber: string; expiryDate: string; cvv: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  const fetchPaymentMethods = async () => {
    setLoading(true);
    try {
      const methods = await ConsumerController.handleGetPaymentMethod(); // Update the function call
      setPaymentMethods(methods);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch payment methods');
    } finally {
      setLoading(false);
    }
  };

  const renderPaymentMethod = ({ item }: { item: { cardNumber: string; expiryDate: string; cvv: string } }) => (
    <View style={{ marginVertical: 10 }}>
      <Text>Card Number: {item.cardNumber}</Text>
      <Text>Expiry Date: {item.expiryDate}</Text>
      <Text>CVV: {item.cvv}</Text>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : paymentMethods.length > 0 ? (
        <FlatList
          data={paymentMethods}
          renderItem={renderPaymentMethod}
          keyExtractor={(item, index) => index.toString()} // Use index as key
        />
      ) : (
        <Text>No payment methods found.</Text>
      )}
    </View>
  );
};

export default ViewPaymentMethodScreen;