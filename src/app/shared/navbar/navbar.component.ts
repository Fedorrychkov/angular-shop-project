import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public nav: Object;
  constructor() {
    this.nav = [
      {
          link: '1',
          title: 'О бренде Starmix',
      },
      {
          link: '2',
          title: 'Доставка и оплата',
      },
      {
          link: '3',
          title: 'Гарантия и сервис',
      },
      {
          link: '4',
          title: 'Новости и видео',
      },
      {
          link: '5',
          title: 'Контакты',
      }
    ];
  }

  ngOnInit() {
  }

}
