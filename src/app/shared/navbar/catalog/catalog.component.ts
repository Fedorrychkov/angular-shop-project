import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public catalog: Object;
  constructor() {
    this.catalog = [
            {
                icon: 'http://starmix.su/pictures/category/icon/5150.png',
                link: '1',
                title: 'Пылесосы для дома и дачи',
                count: 8
            },
            {
                icon: 'http://starmix.su/pictures/category/icon/5149.png',
                link: '2',
                title: 'Профессиональные пылесосы',
                count: 2
            },
            {
                icon: 'http://starmix.su/pictures/category/icon/5147.png',
                link: '3',
                title: 'Строительные пылесосы',
                count: 28
            }
        ];
  }

  ngOnInit() {
  }

}
