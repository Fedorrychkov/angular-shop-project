import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { WarantyComponent } from './waranty/waranty.component';
import { PaymentsComponent } from './payments/payments.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
    { path: '', component: PublicComponent, children: [
        { path: '', component: MainpageComponent },
        { path: 'about',  loadChildren: './about/about.module#AboutModule' },
        { path: 'payments', component: PaymentsComponent },
        { path: 'waranty', component: WarantyComponent },
        { path: 'news', component: NewsComponent },
        { path: 'contacts', component: ContactsComponent },
        { path: '**', redirectTo: '' }
    ]}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PublicRoutingModule { }
