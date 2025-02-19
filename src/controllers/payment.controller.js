const PaymentController = {
 async createPayment(req, res) {
    try {
        res.status(201).json({ message: 'Payment created successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
 }
}

export default PaymentController;
// criar update