"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCities = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const getCities = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const dataPath = 'city.list.json';
    try {
        const result = yield promises_1.default.readFile(dataPath, 'utf-8');
        if (result.length < 1) {
            const err = new Error('File does not hold any data');
            throw err;
        }
        const cities = JSON.parse(result);
        res.status(200).json(cities);
    }
    catch (err) {
        console.log(err);
    }
});
exports.getCities = getCities;
// export const getFilteredCities = () => {
//   db.collection()
// }
