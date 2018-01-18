import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


import { DateformatPipe } from '../pipes/dateformat.pipe';

import { FormControlComponent,
         PageTitleComponent
        } from './ui';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogComponent } from './navbar/catalog/catalog.component';
import { HeroslideComponent } from './heroslide/heroslide.component';
import { BestsellsComponent } from './bestsells/bestsells.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    exports: [
        DateformatPipe,
        FormControlComponent,
        PageTitleComponent,
        NavbarComponent,
        HeroslideComponent,
        BestsellsComponent
    ],
    providers: [
    ],
    declarations: [
        DateformatPipe,
        FormControlComponent,
        PageTitleComponent,
        NavbarComponent,
        CatalogComponent,
        HeroslideComponent,
        BestsellsComponent
    ]
})
export class SharedModule { }
