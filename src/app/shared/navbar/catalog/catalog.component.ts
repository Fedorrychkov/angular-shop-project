import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  animations: [
    trigger('fade', [
        state('in', style({
            display: 'none',
            opacity: 0,
            transform: 'translateY(-10px)',
        })),
        state('out', style({
            opacity: 1,
            transform: 'translateY(10px)',
        })),
        transition('in <=> out', animate('300ms ease-in')),
    ]),
  ]
})
export class CatalogComponent implements OnInit {
    public catalog: Object;
    public isCatalog = false;
    public state = 'in';
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
    fade() {
        this.state = (this.state === 'in' ? 'out' : 'in');
    }
    changeVisible(show) {
        this.isCatalog = !show;
    }

    ngOnInit() {
    }

}
