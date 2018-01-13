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
// import { HistoryInfoComponent } from './ui/history-info/history-info.component';
// import { PageTitleComponent } from './ui/page-title/page-title.component';

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
        PageTitleComponent
    ],
    providers: [
    ],
    declarations: [
        DateformatPipe,
        FormControlComponent,
        PageTitleComponent
    ]
})
export class SharedModule { }
