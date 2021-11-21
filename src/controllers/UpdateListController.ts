import { Request, Response } from 'express';
import { UpdateListService } from '../services/UpdateListService';



class UpdateListController {
    async handle(req: Request, res: Response) {
        const { id, text } = req.body;
        
        const service = new UpdateListService();

        const result = await service.execute(id, text);

        return res.json(result);
    }
}

export { UpdateListController };