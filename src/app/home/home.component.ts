import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { EcommerceServicesService } from '../services/ecommerce-services.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ImagesliderComponent } from '../imageslider/imageslider/imageslider.component';

@Component({
  selector: 'app-home',
  imports: [ProductComponent, CommonModule, RouterLink, ImagesliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  usersService: EcommerceServicesService = inject(EcommerceServicesService)
  isWishList: boolean = false
  isExpanded: boolean = false
  isCartAdded: boolean = false
  showColour: boolean = false
  isValid: boolean = false
  checked: boolean = false
  product: any
  sellProduct: any
  cart: any[] = []
  wishListItem: any[] = []
  wishlistSelected: boolean = false
  router: Router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.usersService.updateCartCount();
    let wishList = JSON.parse(localStorage.getItem("wishListExplore") || "[]");
    if (!Array.isArray(wishList)) {
      wishList = [];
    }
    this.ExploreProducts.forEach(product => {
      product.wishlistSelected = wishList.some((wishItem: any) => wishItem.id === product.id);
    });
    let wishListSell = JSON.parse(localStorage.getItem("wishListSell") || "[]");
    if (!Array.isArray(wishListSell)) {
      wishListSell = [];
    }
    this.sellProducts.forEach(product => {
      product.wishlistSelected = wishListSell.some((wishItem: any) => wishItem.id === product.id);
    });
    this.activatedRoute.fragment.subscribe({
      next: (value: any) => {
        document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' })
        return document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }
  ngAfterViewInit(): void {
    this.activatedRoute.fragment.subscribe({
      next: (value: any) => {
        document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  categories: any[] = [
    {
      image: "home-page/Phones-category.svg",
      para: "Phones"
    },
    {
      image: "home-page/Smart-Watches-category.svg",
      para: "Smart Watches"
    },
    {
      image: "home-page/camera-category1.svg",
      para: "Cameras"
    },
    {
      image: "home-page/Headphones-category.svg",
      para: "Headphones"
    },
    {
      image: "home-page/Computers-category.svg",
      para: "Computers"
    },
    {
      image: "home-page/Gaming-category.svg",
      para: "Gaming"
    }
  ]
  products: any;
  sellProducts: any[] = [
    {
      id: 6,
      discount: "",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/north-coat.png",
      name: "The north coat",
      price: 260,
      discountPrice: "$360",
      rating: "Five-star.svg",
      ratingNo: "(65)",
      wishlistSelected: false
    },
    {
      id: 7,
      discount: "",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/gucci-duffle-bag.png",
      name: "Gucci duffle bag",
      price: 960,
      discountPrice: "$1160",
      rating: "Five-star.svg",
      ratingNo: "(65)",
      wishlistSelected: false
    },
    {
      id: 8,
      discount: "",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/rgb-liquid-cpu-cooler.png",
      name: "RGB liquid CPU Cooler",
      price: 160,
      discountPrice: "$170",
      rating: "Five-star.svg",
      ratingNo: "(65)",
      wishlistSelected: false
    },
    {
      id: 9,
      discount: "",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/small-bookshelf.png",
      name: "Small BookSelf",
      price: 360,
      discountPrice: "$400",
      rating: "Five-star.svg",
      ratingNo: "(65)",
      wishlistSelected: false
    },

  ]
  ExploreProducts: any[] = [
    {
      id: 10,
      new: "",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/cesar-breed-dog-food.png",
      name: "Breed Dry Dog Food",
      price: 100,
      rating: "Five-star.svg",
      ratingNo: "(35)",
      wishlistSelected: false
    },
    {
      id: 11,
      new: "",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/canon-dslr-camera.png",
      name: "CANON EOS DSLR Camera",
      price: 360,
      rating: "Five-star.svg",
      ratingNo: "(65)",
      wishlistSelected: false
    },
    {
      id: 12,
      new: "",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/asus-fhd-gaming-laptop.png",
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: "Five-star.svg",
      ratingNo: "(325)",
      wishlistSelected: false
    },
    {
      id: 13,
      new: "",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/curology-product-set.png",
      name: "Curology Product Set",
      price: 500,
      rating: "Five-star.svg",
      ratingNo: "(145)",
      wishlistSelected: false
    },
    {
      id: 14,
      new: "NEW",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/kid-electric-car.png",
      name: "Kids Electric Car",
      price: 960,
      rating: "Five-star.svg",
      ratingNo: "(65)",
      wishlistSelected: false
    },
    {
      id: 15,
      new: "NEW",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/jr-zoom-soccer-cleat.png",
      name: "Jr. Zoom Soccer Cleats",
      price: 1160,
      rating: "Five-star.svg",
      ratingNo: "(35)",
      wishlistSelected: false
    },
    {
      id: 16,
      new: "NEW",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/gp11-Shooter-usb-gaming.png",
      name: "GP11 Shooter USB Gamepad",
      price: 660,
      rating: "Five-star.svg",
      ratingNo: "(55)",
      wishlistSelected: false
    },
    {
      id: 17,
      new: "NEW",
      wishlist: "wishlist.svg",
      wishListTrue: "red-heart.svg",
      productView: "Quick-View.svg",
      image: "home-page/quilted-satin-jacket.png",
      name: "Quilted Satin Jacket",
      price: 660,
      rating: "Five-star.svg",
      ratingNo: "(55)",
      wishlistSelected: false
    },
  ]
  firstSetStart = 0
  firSetSetEnd = 3
  addItem(product: any) {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    if (!Array.isArray(cartProducts)) {
      cartProducts = [];
    }
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    this.usersService.cartItemsCount.update(old => old + 1);
    return cartProducts

  }
  addProduct(sellProduct: any) {
    let sellcartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    if (!Array.isArray(sellcartProducts)) {
      sellcartProducts = [];
    }
    sellcartProducts.push(sellProduct);

    localStorage.setItem("cartProducts", JSON.stringify(sellcartProducts));

    this.usersService.cartItemsCount.update(old => old + 1);
    alert("Your Cart has been been  added Successfully")
    return sellcartProducts

  }
  addProductExplore(ExploreProduct: any) {
    let cartProductsExplore = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    if (!Array.isArray(cartProductsExplore)) {
      cartProductsExplore = [];
    }
    cartProductsExplore.push(ExploreProduct);
    localStorage.setItem("cartProducts", JSON.stringify(cartProductsExplore));
    this.usersService.cartItemsCount.update(old => old + 1);
    alert("Your Cart has been been  added Successfully")
    return cartProductsExplore
  }
  addWish(product: any) {
    product.wishlistSelected = !product.wishlistSelected;
    localStorage.setItem("wishList", JSON.stringify(product))
  }
  addWishProduct(sellProduct: any) {
    this.showColour = true
    sellProduct.wishlistSelected = !sellProduct.wishlistSelected;
    let wishList = JSON.parse(localStorage.getItem("wishListSell") || "[]");
    if (!Array.isArray(wishList)) {
      wishList = [];
    }
    if (sellProduct.wishlistSelected) {
      wishList.push(sellProduct);
    } else {
      wishList = wishList.filter((product: any) => product.id !== sellProduct.id);
    }
    localStorage.setItem("wishListSell", JSON.stringify(wishList));
    return wishList
  }

  addWishExplore(ExploreProduct: any) {
    ExploreProduct.wishlistSelected = !ExploreProduct.wishlistSelected;
    let wishList = JSON.parse(localStorage.getItem("wishListExplore") || "[]");
    if (!Array.isArray(wishList)) {
      wishList = [];
    }
    if (ExploreProduct.wishlistSelected) {
      wishList.push(ExploreProduct);
    } else {
      wishList = wishList.filter((product: any) => product.id !== ExploreProduct.id);
    }
    localStorage.setItem("wishListExplore", JSON.stringify(wishList));
    return wishList
  }
  toggleExploreWishlist(product: any) {
    product.wishlistSelected = !product.wishlistSelected;
    this.usersService.toggleWishlistItem('wishListExplore', product, this.usersService.wishListExploreCount);
  }

  toggleSellWishlist(product: any) {
    product.wishlistSelected = !product.wishlistSelected;
    this.usersService.toggleWishlistItem('wishListSell', product, this.usersService.wishListSellCount);
  }
  imageClick(ExploreProduct: any) {
    let detailProductExplore = JSON.parse(localStorage.getItem('cartProducts') || '[]')
    detailProductExplore.push(ExploreProduct)
    localStorage.setItem('cartProducts', JSON.stringify(detailProductExplore));
    this.router.navigate(['product-details']);
    return detailProductExplore
  }
  imageClickSell(sellProduct: any) {
    let detailSellProduct = JSON.parse(localStorage.getItem('cartProducts') || '[]')
    detailSellProduct.push(sellProduct)
    localStorage.setItem('cartProducts', JSON.stringify(detailSellProduct));
    this.router.navigate(['product-details']);
    return detailSellProduct
  }
  slides: any[] = [
    {
      image: "slider-banner1.png"
    },
    {
      image: "ecommerce-banner.jpg"
    }
  ]
}

