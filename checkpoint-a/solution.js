// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.

import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Return all orders from the database.
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Return orders from Alexandria with pending status.
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "pending"
  );
}

// 3. Return the highest single-item price, or 0 if the list is empty.
export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return Math.max(...orders.map((order) => order.price));
}

// 4. Return the order description, or a message if the order is missing.
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch {
    return `Could not find order ${id}`;
  }
}

// 5. Return JSON text containing only item and quantity.
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      item: order.item,
      quantity: order.quantity,
    }))
  );
}