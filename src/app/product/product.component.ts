import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { EcommerceServicesService } from '../services/ecommerce-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  isWishList: boolean = false
  isCartAdded: boolean = false
  showColour: boolean = false
  isValid: boolean = false
  usersService: EcommerceServicesService = inject(EcommerceServicesService)
  product: any;
  // router: any;
  router: Router = inject(Router)
  // specialIndex = 4;
  ngOnInit() {
    //previous code
    let wishList = JSON.parse(localStorage.getItem("wishListProducts") || "[]");

    if (!Array.isArray(wishList)) {
      wishList = [];
    }

    this.products.forEach(product => {
      product.wishlistSelected = wishList.some((wishItem: any) => wishItem.id === product.id);
    });
    this.usersService.updateCartCount();

    let wishListProducts = JSON.parse(localStorage.getItem("wishListProducts") || "[]");

    if (!Array.isArray(wishListProducts)) {
      wishListProducts = [];
    }

    this.products.forEach(product => {
      product.wishlistSelected = wishListProducts.some((wishItem: any) => wishItem.id === product.id);
    });
  }

  products: any[] = [

    {
      id: 1,
      discount: "-40% ",
      wishlist: "wishlist.svg",
      productView: "Quick View.svg",
      image: "home  page/havit game pad.png",
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      discountPrice: "160",
      rating: "Five star.svg",
      ratingNo: "(88)",
      wishlistSelected: false

    },
    {
      id: 2,
      discount: "-35%",
      wishlist: "wishlist.svg",
      productView: "Quick View.svg",
      image: "home  page/ak 900 keyboard.png",
      name: "AK-900 Wired Keyboard",
      price: 960,
      discountPrice: "1160",
      rating: "Five star.svg",
      ratingNo: "(75)",
      wishlistSelected: false

    },
    {
      id: 3,
      discount: "-30% ",
      wishlist: "wishlist.svg",
      productView: "Quick View.svg",
      image: "home  page/ips lcg gaming.png",
      name: "IPS LCD Gaming Monitor",
      price: 370,
      discountPrice: "$400",
      rating: "Five star.svg",
      ratingNo: "(99)",
      wishlistSelected: false

    },
    {
      id: 4,
      discount: "-25% ",
      wishlist: "wishlist.svg",
      productView: "Quick View.svg",
      image: "home  page/havic gamepad.png",
      name: "Havic HV G-92 Gamepad",
      price: 192,
      discountPrice: "$400",
      rating: "Five star.svg",
      ratingNo: "(99)",
      wishlistSelected: false

    },
    {
      id: 5,
      discount: "-25% ",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick View.svg",
      image: "home  page/s series comfy chair.png",
      name: "S-Series Comfort Chair",
      price: 375,
      discountPrice: "$400",
      rating: "Five star.svg",
      ratingNo: "(99)",
      wishlistSelected: false

    },


  ]

  addItem(product: any) {

    // localStorage.setItem("cartProducts", JSON.stringify(product))
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    if (!Array.isArray(cartProducts)) {
      cartProducts = [];
    }
    cartProducts.push(product);

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    this.usersService.cartItemsCount.update(old => old + 1);
    alert("your Cart has  been added succesfully")

  }


  addWish(product: any) {
    this.isWishList = true
    this.showColour = true
    //previous worked code
    product.wishlistSelected = !product.wishlistSelected;
    let wishList = JSON.parse(localStorage.getItem("wishListProducts") || "[]");

    if (!Array.isArray(wishList)) {
      wishList = [];
    }

    if (product.wishlistSelected) {
      wishList.push(product);
      // this.usersService.wishListCount.update(old => old + 1);
    } else {
      wishList = wishList.filter((product: any) => product.id !== product.id);
      // this.usersService.wishListCount.update(old => (old > 0 ? old - 1 : 0));
    }

    localStorage.setItem("wishListProducts", JSON.stringify(wishList));
    //previous worked code end




  }
  toggleProductWishlist(product: any) {
    product.wishlistSelected = !product.wishlistSelected;
    this.usersService.toggleWishlistItem('wishListProducts', product, this.usersService.wishListProductsCount);

  }

  imageClickProduct(product: any) {
    let detailProduct = JSON.parse(localStorage.getItem('cartProducts') || '[]')
    detailProduct.push(product)
    console.log(detailProduct);
    localStorage.setItem('cartProducts', JSON.stringify(detailProduct));
    this.router.navigate(['/product-details']);
  }
}
