"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateListController = void 0;
const UpdateListService_1 = require("../services/UpdateListService");
class UpdateListController {
    async handle(req, res) {
        const { id, text } = req.body;
        const service = new UpdateListService_1.UpdateListService();
        const result = await service.execute(id, text);
        return res.json(result);
    }
}
exports.UpdateListController = UpdateListController;
