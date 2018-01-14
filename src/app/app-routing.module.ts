import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
    { path: '', children: [
        { path: '', pathMatch: 'full', loadChildren: './public/public.module#PublicModule'  },
        { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
        { path: 'confirm', loadChildren: './common/confirm/confirm.module#ConfirmModule' },
        { path: '**', redirectTo: '' }
        // { path: 'cabinet', loadChildren: './core/core.module#CoreModule', canActivate: [AuthGuard] },
        // { path: '**', redirectTo: 'cabinet', canActivate: [AuthGuard] }
    ]}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
