import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestsells',
  templateUrl: './bestsells.component.html',
  styleUrls: ['./bestsells.component.scss']
})
export class BestsellsComponent implements OnInit {
  public productLit: Object;

  constructor() {
    this.productLit = [
      {id: 1, title: 'Starmix Haaga 477 Profi-Line - Ручная подметальная машина',
      img: 'http://starmix.su/pictures/product/small/4765_small.jpg',
      stats: [
        {item1: 'Объем мусоросборника, л', value: '50'},
        {item2: 'Объем мусоросборника, л', value: '50'},
        {item3: 'Объем мусоросборника, л', value: '50'}
      ], price: '56000'}
    ];
  }

  ngOnInit() {
  }

}
