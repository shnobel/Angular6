import { Component, OnInit } from '@angular/core';
import {Category} from './Category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  public name: string;
  public description: string;
  public price: number;
  public category: Category;
  public isAvailable: boolean;

  constructor() { }

  ngOnInit() {
  }



}
