import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { ConfirmRoutingModule } from './confirm-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { EmailConfirmComponent } from './email/email.component';
import { ConfirmComponent } from './confirm.component';

@NgModule({
    imports: [
        CommonModule,
        ConfirmRoutingModule,
        ReactiveFormsModule,
        TranslateModule,
        SharedModule
    ],
    declarations: [
        EmailConfirmComponent,
        ConfirmComponent
    ],
    providers: [
        TranslateService
    ]
})
export class ConfirmModule { }
