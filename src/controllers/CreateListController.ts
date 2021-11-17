import { Request, Response } from 'express';
import { CreateListService } from '../services/CreateListService';
import { v4 as uuid } from 'uuid';


class CreateListController {
    async handle(req: Request, res: Response) {
        const { text } = req.body;
        const id = uuid()
        const service = new CreateListService();

        const result = await service.execute(text, id);

        return res.json(result);
    }
}

export { CreateListController };