const PaymentController = {
 async createPayment(req, res) {
    try {
        res.status(201).json({ message: 'Payment created successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
 },
//  atividade pedida pelo Graziane:
    async getPayments(req, res) {
        try {
            res.status(200).json({ message: 'Payments retrieved successfully' });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

    async updatePayment(req, res) {
        try {
            res.status(200).json({ message: 'Payment updated successfully' });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    async deletePayment(req, res) {
        try {
            res.status(200).json({ message: 'Payment deleted successfully' });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}

export default PaymentController;
// criar update,delete e get aqui dentro 