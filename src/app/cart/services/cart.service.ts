import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/Product';
import { ProductsService } from 'src/app/products/services/products.service';

@Injectable()
export class CartService {
  constructor(private productsService: ProductsService) { }
  getCartProducts(): Array<Product> {
    return this.productsService.getProducts().filter(product => product.inCart === true);
  }
}
