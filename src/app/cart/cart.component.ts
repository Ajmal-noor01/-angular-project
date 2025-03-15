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
  // quantity: number = 1
  price: number = 0;
  quantity: number = 1;
  subtotal: number = 0;


  ngOnInit() {



    //test code
    this.productCarts = JSON.parse(localStorage.getItem("cartProducts") || '[]').map((productCart: any) => {
      const quantity = typeof productCart.quantity === "number" && productCart.quantity > 0 ? productCart.quantity : 1;
      return {
        ...productCart,
        quantity,
        subtotal: Number(productCart.price) * quantity,
      };
    });

  }
  update() {
    // this.productCarts = JSON.parse(localStorage.getItem("cartProducts") || '[]').map((productCart: any) => {
    //   const quantity = typeof productCart.quantity === "number" && productCart.quantity > 0 ? productCart.quantity : 1;
    //   return {
    //     ...productCart,
    //     quantity,
    //     subtotal: Number(productCart.price) * quantity,
    //   };
    // });

  }

  calculateTotalPrice() {
    this.totalPrice = this.productCarts.reduce((sum, item) => sum + item.subtotal, 0); //item.price
  }


  getTotalPrice(): number {
    return this.productCarts.reduce((total, product) => total + (product.subtotal || 0), 0);
  }

  //test code 3
  increaseCartNumber(productId: number) {
    this.productCarts = this.productCarts.map(product =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1, subtotal: Number(product.price) * (product.quantity + 1) }
        : product
    );
    console.log(this.productCarts.map(p => p.id));

    this.updateCartStorage();
  }
  decreaseCartNumber(productId: number) {
    this.productCarts = this.productCarts.map(product =>

      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1, subtotal: Number(product.price) * (product.quantity - 1) }
        : product
    );

    this.updateCartStorage();
  }
  updateCartStorage() {
    localStorage.setItem("cartProducts", JSON.stringify(this.productCarts));
  }




}
