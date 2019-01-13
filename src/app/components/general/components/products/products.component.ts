import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data;
  constructor() {
    this.data = [
      {
        image: '../../../../../assets/i2.jpg',
        name : 'Sunflower and Soybean oils',
        details: 'In bulk, flexi and bottles 1L, 1.8L, 3L, 5L '
      },
      {
        image: '../../../../../assets/i1.jpg',
        name : 'Sunflower meal in bulk, 40’fcl',
        details: ''
      },
      {
        image: '../../../../../assets/i3.jpg',
        name : 'Soybean meal in bulk, 40’fcl',
        details: ''
      },
      {
        image: '../../../../../assets/i4.jpg',
        name : 'Wheat Flour in bags, 1kg, 5kg, 25kg, 50kg',
        details: ''
      },
      {
        image: '../../../../../assets/i6.jpg',
        name : 'Sugar',
        details: ''
      }
    ];
   }

  ngOnInit() {

  }

}
