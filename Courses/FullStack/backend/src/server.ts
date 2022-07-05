// Express é um micro framework para criar servidores back-end com o Node.js
// Micro Framework: Framework que resolve um conjunto de problemas, não todos.
import express, { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }))

// Métodos HTTP -> GET | POST | PUT | DELETE

// Tipos de parâmetros
// -------------------
// Query Params | /users?perPage=3&page=1
// Route Params | /users/:id -> /users/1
// Request Body | { "name": "Fernando" }

interface User {
  id: string,
  name: string,
  email: string
}

const users: User[] = [];

app.get('/users', (req: Request, res: Response) => {
  // Retornar os usuários
  return res.json(users);
});

app.post('/users', (req: Request, res: Response) => {
  // Receber os dados do novo usuário
  const { name, email } = req.body

  // Criar novo usuário
  const user = { id: uuid(), name, email };

  // Registrar usuário na base de dados
  users.push(user);

  // Retornar os dados do usuário criado
  return res.json(user);
});

app.put('/users/:id', (req: Request, res: Response) => {
  // Receber os dados do usuário
  const { id } = req.params
  const { name, email } = req.body;

  // Localizar o usuário na base de dados
  const userIndex = users.findIndex((user) => user.id === id);

  // Se o usuários não existir, retornar um erro
  if (userIndex < 0) {
    return res.status(404).json({ error: 'User not found.' });
  }

  // Atualiza o usuário na base de dados
  const user = { id, name, email };
  users[userIndex] = user

  // Retorna os dados do usuário atualizado
  return res.json(user);

});

app.delete('/users/:id', (req: Request, res: Response) => {
  // Receber id do usuário
  const { id } = req.params;

  // Localizar o usuário na base de dados
  const userIndex = users.findIndex((user) => user.id === id);

  // Se o usuário não existir, retornar um erro
  if (userIndex < 0) {
    return res.status(404).json({ error: 'User not found.' });
  }

  // Excluir usuário da base de dados
  users.splice(userIndex, 1);

  // Retorna status de sucesso
  return res.status(204).send();
});

app.listen('3333', () => {
  console.log('Back-end Started!');
});