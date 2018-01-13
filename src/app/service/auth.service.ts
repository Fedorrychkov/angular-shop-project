import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Endpoint } from '../enums/endpoint.enum';
import { Auth, Profile } from '../interfaces/auth';
import { RestService } from './rest.service';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {

    constructor(
        public router: Router,
        public restService: RestService,
        public storageService: StorageService
    ) { }

    login( username: string, password: string ): Promise<any> {
        return new Promise( ( res, rej ) => {
            this.restService.get(Endpoint.AUTH, {
                _username: username,
                _password: password
            }).then(
                (data) => {
                    this.storageService.set( 'mobicrm.auth_token', data.token );
                    this.router.navigate(['/cabinet']);
                    res();
                }, (err) => {
                    rej(err);
                }
            );
        });
    }

    logout() {
        this.storageService.clear();
        this.router.navigate(['/auth']);
    }

}
