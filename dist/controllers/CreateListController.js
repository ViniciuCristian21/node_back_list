"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateListController = void 0;
const CreateListService_1 = require("../services/CreateListService");
const uuid_1 = require("uuid");
class CreateListController {
    async handle(req, res) {
        const { text } = req.body;
        const id = (0, uuid_1.v4)();
        const service = new CreateListService_1.CreateListService();
        const result = await service.execute(text, id);
        return res.json(result);
    }
}
exports.CreateListController = CreateListController;
