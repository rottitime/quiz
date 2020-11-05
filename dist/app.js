"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/test', function (req, res) {
    res.send({ message: 'Hello World' });
});
app.listen(5000, function () { return console.log('Server running'); });
