export interface IBase<T> {
  message: string,
  data: T
}

export interface IPage<T> {
  message: string,
  page: number,
  total: number
  data: T
}

export interface IParam {
  page?: number,
  limit?: number,
  search?: string,
}




