import { Router } from 'express';
import { CreateListController } from './controllers/CreateListController';

const router = Router();

router.post("/text", new CreateListController().handle)

export { router };