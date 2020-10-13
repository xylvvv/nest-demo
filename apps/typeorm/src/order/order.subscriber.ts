import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { Order } from './order.entity';

// 使用订阅者，监听特定的实体事件
@EventSubscriber()
export class OrderSubscriber implements EntitySubscriberInterface<Order> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return Order;
  }

  beforeInsert(event: InsertEvent<Order>): Promise<any> | void {
    console.log(`BEFORE ORDER INSERTED:`, event.entity);
  }
}
