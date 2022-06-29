// Express é um micro framework para criar servidores back-end com o Node.js
// Micro Framework: Framework que resolve um conjunto de problemas, não todos.
import express, { Request, Response } from 'express';

const app = express();

// Métodos HTTP -> GET | POST | PUT | DELETE

app.get('/users', (req: Request, res: Response) => {
    return res.json(['user_1', 'user_2']);
});

app.post('/users', (req: Request, res: Response) => {
    return res.json({ message: 'Criando usuário' });
});

app.put('/users', (req: Request, res: Response) => {
    return res.json({ message: 'Atualizando usuário' });
});

app.delete('/users', (req: Request, res: Response) => {
    return res.json({ message: 'Deletando usuário' });
});

app.listen('3333', () => {
    console.log('Back-end Started!');
});