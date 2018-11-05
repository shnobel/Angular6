import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/products/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  boughtProducts: Array<Product>;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.boughtProducts = this.cartService.getCartProducts();
  }
}
