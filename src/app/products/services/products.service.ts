import { Injectable } from '@angular/core';
import {Product} from '../models/Product';

@Injectable()
export class ProductsService {
  getProducts(): Array<Product> {
    return [
      new Product('TV', 1500, 'Smart TV 42``', true, true),
      new Product('MP3', 150, 'Ipod', true, true),
      new Product('Headphones', 15, 'Sony bluetooth', true, true),
      new Product('Samsung s6', 100, 'Smartphone', false)
    ];
  }
}
