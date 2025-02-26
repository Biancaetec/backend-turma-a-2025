import {z} from "zod"

const PaymentSchema = z.object({
    data: z.string().datetime(10, {message: "Pagamento inválido"}),
    numerorecibo: z.number().int().positive(4, {message: "Número de recibo inválido"}),
    usuarioId: z.number().int().positive(2, {message: "Id do usuário inválido"}),
    valor: z.number().positive(), (4, {message: "Valor inválido"}),
    observacao: z.string().max(100, {message: "Observação inválida"}),

});


const PaymentController = {
 async createPayment(req, res) {
    try {
        const {data, numerorecibo, usuarioId, valor, observacao} = req.body;
        PaymentSchema.parse({data, numerorecibo, usuarioId, valor, observacao});
        console.log({data, numerorecibo, usuarioId, valor, observacao});
        res.status(201).json({ message: 'Payment created successfully' });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                message: "Erro de validação",
                errors: error.errors.map(
                    err => ({
                        atributo: err.path[0],
                        mensagem: err.message
                    })
                )
            })
        }
        res.status(500).send({ error: error.message });
    }
 }
}

export default PaymentController;
// criar update,delete e get aqui dentro 