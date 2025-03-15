import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcommerceServicesService {


  //first worked code end
  //second worked code start
  cartItemsCount = signal(this.loadCartCount());
  // wishListCount = signal(this.loadWishListCount());
  wishListExploreCount = signal(this.loadWishListCount('wishListExplore'));
  wishListSellCount = signal(this.loadWishListCount('wishListSell'));
  wishListProductsCount = signal(this.loadWishListCount('wishListProducts'));
  wishListDetailsCount = signal(this.loadWishListCount('wishListDetail'))

  constructor() { }

  // Load cart count from localStorage
  private loadCartCount(): number {
    return JSON.parse(localStorage.getItem('cartCount') || '0');
  }

  // Load wishlist count from localStorage
  private loadWishListCount(key: string): number {
    // return JSON.parse(localStorage.getItem('wishListCount') || '0');
    // return JSON.parse(localStorage.getItem(`${key}Count`) || '0');
    return JSON.parse(localStorage.getItem(`${key}Count`) || '0');

  }

  // Update cart count and save to localStorage
  updateCartCount(count?: number) {
    if (count === undefined) {
      const cartProducts = JSON.parse(localStorage.getItem("cartProducts") || '[]');
      count = Array.isArray(cartProducts) ? cartProducts.length : 0;
    }
    this.cartItemsCount.set(count);
    localStorage.setItem('cartCount', JSON.stringify(count));
  }

  //Update wishlist count and save to localStorage
  // updateWishListCount() {
  //   const wishList = JSON.parse(localStorage.getItem('wishListExplore') || '[]');
  //   const wishListLength = Array.isArray(wishList) ? wishList.length : 0;
  //   this.wishListCount.set(wishListLength);
  //   localStorage.setItem('wishListCount', JSON.stringify(wishListLength));

  // }

  updateWishListCount(key: string, countSignal: any) {
    const wishList = JSON.parse(localStorage.getItem(key) || '[]') || [];
    const wishListLength = Array.isArray(wishList) ? wishList.length : 0;

    countSignal.set(wishListLength);
    localStorage.setItem(`${key}Count`, JSON.stringify(wishListLength));
  }
  toggleWishlistItem(key: string, product: any, countSignal: any) {
    let wishList = JSON.parse(localStorage.getItem(key) || '[]');

    if (!Array.isArray(wishList)) {
      wishList = [];
    }

    if (product.wishlistSelected) {
      wishList.push(product);
    } else {
      wishList = wishList.filter((item: any) => item.id !== product.id);
    }

    // Save updated wishlist and update count
    localStorage.setItem(key, JSON.stringify(wishList));
    this.updateWishListCount(key, countSignal);
  }

  // updateWishListCountSell() {
  //   const wishListForSell = JSON.parse(localStorage.getItem('wishListSell') || '[]');
  //   const wishListLengthForSell = Array.isArray(wishListForSell) ? wishListForSell.length : 0;
  //   this.wishListCount.set(wishListLengthForSell);
  //   localStorage.setItem('wishListCount', JSON.stringify(wishListLengthForSell));

  // }
  //test code

  // wishListExploreCount = signal(this.loadWishListCount('wishListExplore'));
  // wishListSellCount = signal(this.loadWishListCount('wishListSell'));
  // wishListProductsCount = signal(this.loadWishListCount('wishListProducts'));
  // wishListDetailCount = signal(this.loadWishListCount('wishListDetail'));

  // // constructor() {}

  // // Load wishlist count dynamically
  // private loadWishListCount(key: string): number {
  //   return JSON.parse(localStorage.getItem(`${key}Count`) || '0');
  // }

  // // Generic function to update wishlist count
  // updateWishListCount(key: string, signalRef: Signal<number>) {
  //   let wishList = JSON.parse(localStorage.getItem(key) || '[]');

  //   if (!Array.isArray(wishList)) {
  //     wishList = [];
  //   }

  //   const wishListLength = wishList.length;
  //   signalRef.set(wishListLength);
  //   localStorage.setItem(`${key}Count`, JSON.stringify(wishListLength));
  // }

  // // Add or remove item from wishlist
  // toggleWishlistItem(key: string, product: any, signalRef: Signal<number>) {
  //   let wishList = JSON.parse(localStorage.getItem(key) || '[]');

  //   if (!Array.isArray(wishList)) {
  //     wishList = [];
  //   }

  //   if (product.wishlistSelected) {
  //     wishList.push(product);
  //   } else {
  //     wishList = wishList.filter((item: any) => item.id !== product.id);
  //   }

  //   // Save updated wishlist and count
  //   localStorage.setItem(key, JSON.stringify(wishList));
  //   this.updateWishListCount(key, signalRef);
  // }


}
