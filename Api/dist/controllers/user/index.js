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
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.create = void 0;
const user_1 = require("../../repository/user");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedUser = yield (0, user_1.createUser)(req.body);
        res.status(200).send(savedUser);
    }
    catch (e) {
        console.log(e);
        res.status(400).send(e.errors);
    }
});
exports.create = create;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_1.getAll)();
        res.status(200).send(users);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.get = get;
