import { Order, OrderDetails } from '../../interfaces/order'

interface OrdersAPI {
  readonly baseUrl: string
  getOrders: () => Promise<Order[]>
}
class ordersAPI implements OrdersAPI {
  baseUrl = ''

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getOrders() {
    const response = await fetch(`${this.baseUrl}/orders/list`)
    return response.json()
  }

  async getOrderById(id: number) {
    const response = await fetch(`${this.baseUrl}/orders/${id}`)
    return response.json()
  }
}
const api = new ordersAPI('https://admin-ct.cargis.pro/api/client/v1/public')
export default api
