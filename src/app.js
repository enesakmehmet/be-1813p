import express from 'express';
import dotenv from 'dotenv';
import categoryRoute from './route/categoryRoute'
import productRoute from './route/productRoute.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/api/v1/categories',categoryRoute)
app.use('/api/v1/products',productRoute)

app.get('/healthcheck', (req, res) => {
  res.send('ok');
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
