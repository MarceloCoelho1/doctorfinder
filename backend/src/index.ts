import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
const port: Number = 4444;

app.use(express.json());
app.use(cors());
//app.use('/api', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
