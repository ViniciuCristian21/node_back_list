"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletListService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class DeletListService {
    async execute(id) {
        const list = await prisma_1.default.list.delete({
            where: {
                id: id,
            }
        });
        return list;
    }
}
exports.DeletListService = DeletListService;
