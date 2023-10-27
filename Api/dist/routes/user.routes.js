"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const userRoutes = (app) => {
    app.get("/user", user_1.get);
    app.post("/user", user_1.create);
};
exports.default = userRoutes;
