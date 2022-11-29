import { Component, OnInit } from '@angular/core';
import productData from '../../assets/jsons/products.json';

interface productList{
  name: String,
  img1: String,
  img2: String,
  price: String
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
  ngOnInit(): void {
  }

  products: productList[] = productData;
}