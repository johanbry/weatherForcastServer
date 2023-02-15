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
exports.getCurrentWeather = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getCurrentWeather = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { lat, long } = req.params;
        if (!lat || !long)
            throw Error('Missing coordinates');
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.API_KEY}`;
        const response = yield fetch(url);
        const data = yield response.json();
        res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).end();
    }
});
exports.getCurrentWeather = getCurrentWeather;
