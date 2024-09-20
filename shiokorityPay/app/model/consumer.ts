import config from '../../config';
import axios from 'axios';

class Consumer {
  static async processPayment(data: { merchantId: number; amount: number }) {

    try {
      const response = await axios.post(`${config.API_URL}/consumer/process-payment`, data);
      return response.data;
    } catch (error) {
      throw new Error('Payment processing failed'); 
    }
  }

  static validatePayment(merchantId: number, amount: number): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!Number.isInteger(merchantId) || merchantId <= 0) {
      errors.push('Invalid Merchant ID');
    }

    if (isNaN(amount) || amount <= 0) {
      errors.push('Invalid Amount');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

export default Consumer;