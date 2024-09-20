import * as SQLite from 'expo-sqlite/legacy';
// import config from '../../config';

class Consumer {
  private db = SQLite.openDatabase('payment_methods.db');

  constructor() {
    this.initializeDatabase(); // Call the initialization in the constructor
  }

  private initializeDatabase() {
    this.db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS payment_methods (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          cardNumber TEXT,
          expiryDate TEXT,
          cvv TEXT
        );`,
        [],
        () => {
          console.log('Table created successfully');
        },
        (_, error) => {
          console.error('Failed to create table:', error);
          return true; // Prevent default behavior
        }
      );
    });
  }

  public savePaymentMethod(paymentMethod: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  }): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO payment_methods (cardNumber, expiryDate, cvv) VALUES (?, ?, ?);',
          [paymentMethod.cardNumber, paymentMethod.expiryDate, paymentMethod.cvv],
          () => {
            console.log('Payment method saved successfully');
            resolve();
          },
          (_, error) => {
            console.error('Failed to save payment method:', error);
            reject(error);
            return true; // Prevent default behavior
          }
        );
      });
    });
  }

  public getAllPaymentMethods(): Promise<{ cardNumber: string; expiryDate: string; cvv: string }[]> {
    return new Promise((resolve, reject) => {
      this.db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM payment_methods;',
          [],
          (_, { rows: { _array } }) => {
            const paymentMethods = _array.map(paymentMethod => ({
              cardNumber: paymentMethod.cardNumber,
              expiryDate: paymentMethod.expiryDate,
              cvv: paymentMethod.cvv,
            }));
            resolve(paymentMethods);
          },
          (_, error) => {
            reject(error);
            console.error('Failed to retrieve payment methods:', error);
            return true; // Prevent default behavior
          }
        );
      });
    });
  }

  public updatePaymentMethod(id: number, paymentMethod: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  }): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.transaction(tx => {
        tx.executeSql(
          'UPDATE payment_methods SET cardNumber = ?, expiryDate = ?, cvv = ? WHERE id = ?;',
          [paymentMethod.cardNumber, paymentMethod.expiryDate, paymentMethod.cvv, id],
          () => {
            console.log('Payment method updated successfully');
            resolve();
          },
          (_, error) => {
            console.error('Failed to update payment method:', error);
            reject(error);
            return true;
          }
        );
      });
    });
  }
  
  public deletePaymentMethod(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM payment_methods WHERE id = ?;',
          [id],
          () => {
            console.log('Payment method deleted successfully');
            resolve();
          },
          (_, error) => {
            console.error('Failed to delete payment method:', error);
            reject(error);
            return true;
          }
        );
      });
    });
  }
}

export default Consumer;