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
            link: '/about',
            title: 'О бренде Starmix',
        },
        {
            link: '/payments',
            title: 'Доставка и оплата',
        },
        {
            link: '/waranty',
            title: 'Гарантия и сервис',
        },
        {
            link: '/news',
            title: 'Новости и видео',
        },
        {
            link: '/contacts',
            title: 'Контакты',
        }
    ];
  }
    click(e) {
        console.log('click');
    }
  ngOnInit() {
  }

}
