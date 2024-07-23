interface OrderItem {
    id: number;
    product_title: string;
    quantity: number;
    price: number;
}

interface Order {
    id: number;
    name: string;
    email: string;
    total: number;
    order_items: OrderItem[];
}