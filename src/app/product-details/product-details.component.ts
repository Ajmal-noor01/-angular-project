import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { EcommerceServicesService } from '../services/ecommerce-services.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [ProductComponent, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  isWishList: boolean = false
  isCartAdded: boolean = false
  showColour: boolean = false
  isValid: boolean = false
  usersService: EcommerceServicesService = inject(EcommerceServicesService)
  productDetail: any;
  // quantity: number = 0
  quantity: number = 1;


  // specialIndex = 4;
  productList: any;
  productLists: any[] = [];
  router: Router = inject(Router)



  ngOnInit() {
    // const productData = localStorage.getItem('productDetailStore');
    const productData = localStorage.getItem("cartProducts");
    // const lastproduct=productData.length-1
    console.log(productData);

    // const cartItem = localStorage.getItem("cartProducts")
    if (productData) {
      this.productList = JSON.parse(productData);
      this.productList.quantity = 1;
      console.log(this.productList.length);

      this.productLists.push(this.productList)

      // localStorage.setItem("cartProducts", JSON.stringify(productData))
    }
    //previous code
    let wishList = JSON.parse(localStorage.getItem("wishListDetail") || "[]");

    if (!Array.isArray(wishList)) {
      wishList = [];
    }

    this.productDetails.forEach(product => {
      product.wishlistSelected = wishList.some((wishItem: any) => wishItem.id === product.id);
    });
    this.usersService.updateCartCount();
    // this.usersService.updateWishListCount();

  }

  decreaseNumber() {
    if (this.productList.quantity > 0)
      this.productList.quantity--
    //     // localStorage.setItem("cartProducts", JSON.stringify(this.productList));
  }
  increaseNumber() {
    if (this.productList.quantity < 10)
      this.productList.quantity++
    // localStorage.setItem("cartProducts", JSON.stringify(this.productList));
  }

  productDetails: any[] = [
    {
      id: 18,
      discount: "-40% ",
      wishlists: "wishlist.svg",
      productView: "Quick View.svg",
      image: "home  page/havit game pad.png",
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      discountPrice: "$160",
      rating: "Five star.svg",
      ratingNo: "(88)",
      wishlistSelected: false

    },
    {
      id: 19,
      discount: "-35%",
      wishlists: "wishlist.svg",
      productView: "Quick View.svg",
      image: "home  page/ak 900 keyboard.png",
      name: "AK-900 Wired Keyboard",
      price: 960,
      discountPrice: "$1160",
      rating: "Five star.svg",
      ratingNo: "(75)",
      wishlistSelected: false

    },
    {
      id: 20,
      discount: "-30% ",
      wishlists: "wishlist.svg",
      productView: "Quick View.svg",
      image: "home  page/ips lcg gaming.png",
      name: "IPS LCD Gaming Monitor",
      price: 370,
      discountPrice: "$400",
      rating: "Five star.svg",
      ratingNo: "(99)",
      wishlistSelected: false

    }, {
      id: 21,
      discount: "",
      wishlists: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick View.svg",
      image: "home  page/rgb liquid cpu cooler.png",
      name: "RGB liquid CPU Cooler",
      price: 160,
      discountPrice: "$170",
      rating: "Five star.svg",
      ratingNo: "(65)",
      wishlistSelected: false

    },
  ]
  addItemDetail(productDetail: any) {


    let cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    if (!Array.isArray(cartProducts)) {
      cartProducts = [];
    }
    cartProducts.push(productDetail);

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    this.usersService.cartItemsCount.update(old => old + 1);

  }
  addWishDetail(productDetail: any) {
    this.showColour = true
    productDetail.wishlistSelected = !productDetail.wishlistSelected;

    let wishList = JSON.parse(localStorage.getItem("wishListDetail") || "[]");

    if (!Array.isArray(wishList)) {
      wishList = [];
    }

    if (productDetail.wishlistSelected) {
      wishList.push(productDetail);
      // this.usersService.wishListCount.update(old => old + 1);
    } else {
      wishList = wishList.filter((product: any) => product.id !== productDetail.id);
      // this.usersService.wishListCount.update(old => (old > 0 ? old - 1 : 0));
    }

    localStorage.setItem("wishListDetail", JSON.stringify(wishList));



  }
  toggleDetailWishlist(product: any) {
    product.wishlistSelected = !product.wishlistSelected;
    this.usersService.toggleWishlistItem('wishListDetail', product, this.usersService.wishListDetailsCount);
  }
  imageClick(productDetail: any) {

    let productDetailItem = JSON.parse(localStorage.getItem("cartProducts") || '[]')
    productDetailItem.push(productDetail)
    localStorage.setItem("cartProducts", JSON.stringify(productDetailItem));
    // localStorage.setItem("cartProducts",JSON.stringify(product))
    this.router.navigate(['/product-details']);

  }
  gotoCart() {

    this.router.navigate(['/products-cart'])

  }
}
