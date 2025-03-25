import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-check-out',
  imports: [CommonModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {
  checkouts: any[] = []
  totalPrice: number = 0
  ngOnInit() {
    this.checkouts = JSON.parse(localStorage.getItem("cartProducts") || '[]').map((product: any) => ({
      ...product,
      quantity: product.quantity || 1,
      subtotal: Number(product.price) * (product.quantity || 1),
    }));
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    this.totalPrice = this.checkouts.reduce((sum, item) => sum + item.subtotal, 0);
    return this.totalPrice
  }
  placeOrder() {
    alert("Your Order has been placed Successfully")
  }
}
