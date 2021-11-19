"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetListController = void 0;
const GetListService_1 = require("../services/GetListService");
class GetListController {
    async handle(req, res) {
        const service = new GetListService_1.GetListService();
        const result = await service.execute();
        return res.json(result);
    }
}
exports.GetListController = GetListController;
