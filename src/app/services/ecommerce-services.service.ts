import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcommerceServicesService {
  cartItemsCount = signal(this.loadCartCount());
  wishListExploreCount = signal(this.loadWishListCount('wishListExplore'));
  wishListSellCount = signal(this.loadWishListCount('wishListSell'));
  wishListProductsCount = signal(this.loadWishListCount('wishListProducts'));
  wishListDetailsCount = signal(this.loadWishListCount('wishListDetail'))
  constructor() { }
  private loadCartCount(): number {
    return JSON.parse(localStorage.getItem('cartCount') || '0');
  }
  private loadWishListCount(key: string): number {
    return JSON.parse(localStorage.getItem(`${key}Count`) || '0');
  }
  updateCartCount(count?: number) {
    if (count === undefined) {
      const cartProducts = JSON.parse(localStorage.getItem("cartProducts") || '[]');
      count = Array.isArray(cartProducts) ? cartProducts.length : 0;
    }
    this.cartItemsCount.set(count);
    localStorage.setItem('cartCount', JSON.stringify(count));
  }
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
    localStorage.setItem(key, JSON.stringify(wishList));
    this.updateWishListCount(key, countSignal);
  }
}
