
import { Router, Request, Response } from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const router = Router();
const JSON_SERVER_PORT = 5000;

// Routes
router.post('/', async (req: Request, res: Response) => {
    const item = {
        id: uuidv4(),
        name: req.body.name
    };

    try {
        const response = await axios.post(`http://localhost:${JSON_SERVER_PORT}/items`, item);
        res.status(201).send(response.data);
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// Read (GET)
router.get('/', async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`http://localhost:${JSON_SERVER_PORT}/items`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// Update (PUT)
router.put('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        await axios.put(`http://localhost:${JSON_SERVER_PORT}/${id}`, {
            name: req.body.name
        });
        const updatedItem = await axios.get(`http://localhost:${JSON_SERVER_PORT}/items/${id}`);
        res.send(updatedItem.data);
    }catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 404) {
                res.status(404).send({ message: 'Item not found' });
            } else {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        } else {
            res.status(500).send({ message: 'Unexpected error occurred' });
        }
    }
});

// Delete (DELETE)
router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        await axios.delete(`http://localhost:${JSON_SERVER_PORT}/items/${id}`);
        res.status(204).send();
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 404) {
                res.status(404).send({ message: 'Item not found' });
            } else {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        } else {
            res.status(500).send({ message: 'Unexpected error occurred' });
        }
    }
});

export default router;