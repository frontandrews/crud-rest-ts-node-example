import express, { Express } from 'express';
import items from './routes/items';


const app: Express = express();
const PORT = 3000;

// Middlewares
app.use(express.json());

app.use('/items', items);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
