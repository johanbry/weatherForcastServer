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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const weather_router_1 = __importDefault(require("./routes/weather.router"));
const cities_router_1 = __importDefault(require("./routes/cities.router"));
const connect_db_1 = require("./db/connect.db");
const port = process.env.PORT || '3000';
app.use((0, cors_1.default)());
app.use('/api/weather', weather_router_1.default);
app.use('/api/cities', cities_router_1.default);
// connect to db and start server
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_db_1.createConnection)();
        app.listen(port, () => console.log(`Server listens on port ${port}`));
    }
    catch (err) {
        console.log(err, 'Kunde inte skapa databaskoppling');
    }
}))();
