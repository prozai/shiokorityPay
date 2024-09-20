
import Consumer from '../model/consumer';

class ConsumerController {
  static async processPayment(data: { merchantId: number; amount: number }) {
    return Consumer.processPayment(data);
  }

  static validatePayment(merchantId: number, amount: number) {
    return Consumer.validatePayment(merchantId, amount);
  }
}

export default ConsumerController;