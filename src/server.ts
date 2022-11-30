import express from 'express'
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333, () => {
  console.log('Server is running on PORT 3333 🚀 \nRedirect to your server: http://localhost:3333\n')
})