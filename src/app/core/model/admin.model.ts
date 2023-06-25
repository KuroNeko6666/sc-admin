export interface IAdmin {
  id: string
  name: string
  username: string
  email: string
  role: "operator-user" | "operator-device" | "operator"
}
