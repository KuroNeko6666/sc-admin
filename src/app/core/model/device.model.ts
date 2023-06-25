export interface IDevice {
  id: string
  model: string
  address: IAddress
  subcribers?: number
}

export interface IDeviceMarket {
  id: string
  model: string
  address: IAddress
  subcribe?: boolean
}

export interface IAddress {
  address: string
  city: string
  province: string
  longitude: string
  latitude: string
}
