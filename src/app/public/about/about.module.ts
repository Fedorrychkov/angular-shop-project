import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        SharedModule,
        TranslateModule,
        AboutRoutingModule
    ],
    providers: [
        TranslateService
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }
