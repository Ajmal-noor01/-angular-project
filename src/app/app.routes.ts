import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "sign-up", loadComponent: () => import('./signup/signup.component').then(c => c.SignupComponent) },
    { path: "log-in", loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
    { path: "home", loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
    { path: "product-details", loadComponent: () => import('./product-details/product-details.component').then(c => c.ProductDetailsComponent) },
    { path: "products-cart", loadComponent: () => import('./cart/cart.component').then(c => c.CartComponent) },
    { path: "Check-out", loadComponent: () => import('./check-out/check-out.component').then(c => c.CheckOutComponent) },
    { path: "footer", loadComponent: () => import('./footer/footer.component').then(c => c.FooterComponent) },

    { path: "**", loadComponent: () => import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) },

    // {
    //     path: "log-in", children: [

    //         {
    //             path: "", component: LoginComponent
    //         },
    //         {
    //             path: "home", component: HomeComponent,
    //         },


    //     ]
    // },
    // {
    //     path: "log-in", children: [

    //         {
    //             path: "", component: LoginComponent
    //         },
    //         {
    //             path: "home", component: HomeComponent,
    //         },

    //     ]
    // },

];








