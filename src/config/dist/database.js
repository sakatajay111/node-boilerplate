"use strict";
exports.__esModule = true;
exports.pool = void 0;
var pg_1 = require("pg");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var pool = new pg_1.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || ""),
    database: process.env.DB
});
exports.pool = pool;
