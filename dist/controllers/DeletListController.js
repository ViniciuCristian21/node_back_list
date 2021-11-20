"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletListController = void 0;
const DeletListService_1 = require("../services/DeletListService");
class DeletListController {
    async handle(req, res) {
        const id = req.params.id;
        const service = new DeletListService_1.DeletListService();
        const result = await service.execute(id);
        return res.json(result);
    }
}
exports.DeletListController = DeletListController;
