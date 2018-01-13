import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailConfirmComponent } from './email/email.component';
import { ConfirmComponent } from './confirm.component';

const routes: Routes = [
    { path: '', component: ConfirmComponent, children: [
        { path: '', redirectTo: 'email', pathMatch: 'full' },
        { path: 'email', component: EmailConfirmComponent }
    ]}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ConfirmRoutingModule { }
