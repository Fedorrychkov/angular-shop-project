import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
    { path: '', children: [
        { path: '', loadChildren: './public/public.module#PublicModule'  },
        { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
        { path: 'confirm', loadChildren: './common/confirm/confirm.module#ConfirmModule' },
        { path: '**', redirectTo: '' }
    ]}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
