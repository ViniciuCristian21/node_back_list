"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateListService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class UpdateListService {
    async execute(id, text) {
        const list = await prisma_1.default.list.update({
            data: {
                text: text,
            },
            where: {
                id: id,
            },
        });
        return list;
    }
}
exports.UpdateListService = UpdateListService;
