"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weather_controller_js_1 = require("../controllers/weather.controller.js");
const weatherRouter = express_1.default.Router();
weatherRouter.get('/:lat/:long', weather_controller_js_1.getCurrentWeather);
exports.default = weatherRouter;
