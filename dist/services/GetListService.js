"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetListService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class GetListService {
    async execute() {
        const lists = await prisma_1.default.list.findMany();
        return lists;
    }
}
exports.GetListService = GetListService;
