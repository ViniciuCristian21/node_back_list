"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateListService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CreateListService {
    async execute(text, id) {
        const list = await prisma_1.default.list.create({
            data: {
                id,
                text
            }
        });
        return list;
    }
}
exports.CreateListService = CreateListService;
