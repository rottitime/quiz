"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app) {
    app.get('/test', function (req, res) {
        res.send({ message: 'Hello World v1' });
    });
};
