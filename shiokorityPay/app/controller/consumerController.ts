import Consumer from '../model/consumer';

class ConsumerController {

  private static consumer = new Consumer(); // Create an instance

  static async handleSavePaymentMethod(paymentMethod: { cardNumber: string; expiryDate: string; cvv: string; }) {
    return this.consumer.savePaymentMethod(paymentMethod);
  }

  static async handleGetPaymentMethod() {
    return this.consumer.getAllPaymentMethods();
  }

  static async handleUpdatePaymentMethod(id: number, updatedMethod: { cardNumber: string; expiryDate: string; cvv: string; }) {
    return this.consumer.updatePaymentMethod(id, updatedMethod);
  }

  static async handleDeletePaymentMethod(id: number) {
    return this.consumer.deletePaymentMethod(id);
  }

}

export default ConsumerController;