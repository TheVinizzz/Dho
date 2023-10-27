import { Application } from "express";
import { create, get } from "../controllers/user"

const userRoutes = (app: Application) => {
    app.get("/user", get);
    app.post("/user", create);
}

export default userRoutes;