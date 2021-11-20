import { Request, Response } from 'express';
import { DeletListService } from '../services/DeletListService';



class DeletListController {
    async handle(req: Request, res: Response) {
        const id  = req.params.id;

        const service = new DeletListService();

        const result = await service.execute(id);

        return res.json(result);
    }
}

export { DeletListController };