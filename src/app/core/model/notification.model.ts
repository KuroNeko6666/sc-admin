export interface INotification {
  id?: string
  message: string
  status: "failure" | "success" | "warning"
}
