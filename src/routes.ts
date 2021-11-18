import { Router } from 'express';
import { CreateListController } from './controllers/CreateListController';
import { GetListController } from './controllers/GetListController';

const router = Router();

router.post("/text", new CreateListController().handle);

router.get("/text/list", new GetListController().handle);

export { router };