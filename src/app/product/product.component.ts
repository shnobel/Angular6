import { Component, OnInit } from '@angular/core';

enum Category{
  Audio = "Audio",
  Video = "Video",
  TV = "TV"
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() { 
    this.name = "TV";
    this.description = "Smart TV 32\""
    this.price = 150;
    this.category = Category.TV;
    this.isAvailable = true;
  }

  ngOnInit() {
  }
}
