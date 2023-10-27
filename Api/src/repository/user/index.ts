import { prisma } from "../../services/prisma";
import * as Types from "./types"

export const createUser = async (data: Types.INewUser) => {
  const user = await prisma.user.create({
    data
  })

  return user
}

export const getAll = async () => {
  return await prisma.user.findMany()
}