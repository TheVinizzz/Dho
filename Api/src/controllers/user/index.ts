import { Request, Response } from "express"
import { createUser, getAll } from "../../repository/user"

export const create = async (req: Request, res: Response) => {
    try {
        const savedUser = await createUser(req.body)
        res.status(200).send(savedUser)
    }
    catch (e: any) {
        console.log(e)
        res.status(400).send(e.errors)
    }
}

export const get = async (req: Request, res: Response) => {
    try {
        const users = await getAll();
        res.status(200).send(users)
    }
    catch (e) {
        res.status(400).send(e)
    }
}