"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var playersSchema = new mongoose_1.Schema({
    name: String,
});
exports.default = playersSchema;
