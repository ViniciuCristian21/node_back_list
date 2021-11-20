import { Router } from 'express';
import { CreateListController } from './controllers/CreateListController';
import { GetListController } from './controllers/GetListController';
import { DeletListController } from './controllers/DeletListController'
const router = Router();

router.post("/text", new CreateListController().handle);

router.get("/text/list", new GetListController().handle);

router.delete("/text/:id", new DeletListController().handle);

export { router };