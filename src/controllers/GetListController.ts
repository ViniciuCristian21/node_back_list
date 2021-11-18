import { Request, Response } from 'express';
import { GetListService } from '../services/GetListService';



class GetListController {
    async handle(req: Request, res: Response) {
        const service = new GetListService();

        const result = await service.execute();

        return res.json(result);
    }
}

export { GetListController };