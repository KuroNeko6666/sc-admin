import { IDevice } from "./device.model"
import { IUser } from "./user.model"

export interface IOrder {
  id: string
  user: IUser
  items: IDevice[]
  status: "waiting" | "rejected" | "accepted"
}
