import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  productCart: any;
  productCarts: any[] = [];
  totalPrice: number = 0
  productDataCart: any[] = []
  price: number = 0;
  quantity: number = 1;
  subtotal: number = 0;
  ngOnInit() {
    this.productCarts = JSON.parse(localStorage.getItem("cartProducts") || '[]').map((productCart: any) => {
      const quantity = typeof productCart.quantity === "number" && productCart.quantity > 0 ? productCart.quantity : 1;
      return {
        ...productCart,
        quantity,
        subtotal: Number(productCart.price) * quantity,
      };
    });
  }


  calculateTotalPrice() {
    this.totalPrice = this.productCarts.reduce((sum, item) => sum + item.subtotal, 0); //item.price
  }


  getTotalPrice(): number {
    return this.productCarts.reduce((total, product) => total + (product.subtotal || 0), 0);
  }

  increaseCartNumber(productId: number) {
    this.productCarts = this.productCarts.map(product =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1, subtotal: Number(product.price) * (product.quantity + 1) }
        : product
    );


    this.updateCartStorage();
    return this.productCarts.map(p => p.id)
  }
  decreaseCartNumber(productId: number) {
    this.productCarts = this.productCarts.map(product =>

      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1, subtotal: Number(product.price) * (product.quantity - 1) }
        : product
    );

    this.updateCartStorage();
  }
  removeFromCart(productId: number) {
    this.productCarts = this.productCarts.filter(product => product.id !== productId);
    this.updateCartStorage();
    this.getTotalPrice()
  }
  updateCartStorage() {
    localStorage.setItem("cartProducts", JSON.stringify(this.productCarts));
  }




}
