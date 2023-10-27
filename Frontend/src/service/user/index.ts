import { api } from '..'

export class UserApi {
  private static readonly baseUrl = '/user'

  static async createUser(): Promise<void> {
    const url = `${UserApi.baseUrl}`
    const response = await api.get(url);
    return response.data;
  }

}