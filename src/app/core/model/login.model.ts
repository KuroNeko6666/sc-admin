import { IAdmin } from "./admin.model"
import { IUser } from "./user.model"

export interface ILogin {
  token: string
  user: IAdmin
}
