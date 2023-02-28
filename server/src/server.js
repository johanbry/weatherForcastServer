"use strict";
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
let db;
(0, connect_db_1.connectToDb)((err) => {
    // If we don't have an error we listen to request.
    if (!err) {
        app.listen(port, () => console.log(`Server is up and running, listening on port ${port}`));
    }
    db = (0, connect_db_1.getDb)();
    console.log(db);
});
exports.default = db;
