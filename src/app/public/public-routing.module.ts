import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
    { path: '', component: PublicComponent, children: [
        { path: '', pathMatch: 'full', component: MainpageComponent },
        // { path: 'email', component: EmailConfirmComponent }
    ]}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PublicRoutingModule { }
