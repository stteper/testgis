export interface CargoType {
  id: number
  title: string
  order_type_id: number
  nomenclature_code: number | null
}

export interface CoordinatePoint {
  latitude: number
  longitude: number
}

export interface Order {
  id: number
  loading_address: string
  unloading_address: string
  views_count: number
  tariff_c: number
  distance_m: number
  load_dt: string
  ending_dt: string
  cargo_type: string
  cargo_type_object: CargoType
  tonnage_kg: number
  tonnage_balance_kg: number
  lat_lng_from: CoordinatePoint
  lat_lng_to: CoordinatePoint
  create_dt: string
}

export interface OrderDetails extends Order {
  short_name: string
  coords_from: string
  coords_to: string
  loading_city: string
  unloading_city: string
  transport_type: string
  scales_length_cm: number
  scales_capacity_kg: number | null
  loading_desc: string
  downtime_desc: string | null
  downtime_cost: number | null
  additional_info: string | null
  daily_shipping_rate_kg: number | null
  deviation_percent: number
  deviation_type: string
  kontur_status: number
  verification: number
}

export enum OrderCurrentStatus {
  active = 1,
  closed,
}
