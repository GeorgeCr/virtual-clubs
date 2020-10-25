import { Request, Response } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());
const SERVER_PORT = '9000';

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Hello from server!'
    });
});

app.listen(SERVER_PORT, () => console.log(`Node app is now listening on port ${SERVER_PORT}.`));