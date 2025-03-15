import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EcommerceServicesService } from '../services/ecommerce-services.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ProductComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  usersService: EcommerceServicesService = inject(EcommerceServicesService)

  countEffect = effect(() => {
    if (this.usersService.cartItemsCount() > 0) {

    }
  })
  gotoProductCart() {


  }

}
