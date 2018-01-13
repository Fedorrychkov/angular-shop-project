import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    public authlinks: any[];

    constructor() {
        this.authlinks = [
            {
                link: 'signin',
                title: 'Log in'
            }, {
                link: 'signup',
                title: 'Sign up'
            }
        ];
    }

  ngOnInit() {
  }

}
