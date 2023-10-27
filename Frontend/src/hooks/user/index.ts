import { api } from "../../service"
import { IUser } from "./types"

const useUser = () => {

    const createUser = async (data: IUser) => {
        await api.post("/user", data)
    }

    return {
        createUser
    }
}

export default useUser