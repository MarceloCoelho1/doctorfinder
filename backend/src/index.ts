import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';
const app: Application = express();
const port: Number = 4444;

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
