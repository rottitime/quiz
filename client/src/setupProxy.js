const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        //["/test", "/auth/google"],
        ["/api"],
        createProxyMiddleware({
            target: "http://localhost:5000",
        })
    );
};