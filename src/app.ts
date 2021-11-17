import express from 'express';
import { router } from './routes';
const app = express()
// para usar json nas req
app.use(express.json());
const port = 4000;

app.use(router);



app.listen(port, () => console.log(`Server is running in: ${port}`));