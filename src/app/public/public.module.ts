import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PublicComponent } from './public.component';
import { CartComponent } from './cart/cart.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
    imports: [
        CommonModule,
        PublicRoutingModule,
        ReactiveFormsModule,
        TranslateModule,
        SharedModule
    ],
    declarations: [
        PublicComponent,
        CartComponent,
        MainpageComponent
    ],
    providers: [
        TranslateService
    ]
})
export class PublicModule { }
