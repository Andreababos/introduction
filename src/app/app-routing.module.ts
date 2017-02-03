import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent }  from './detail/detail.component';

const routes: Routes = [
    { path: 'detail/:mbid', component: DetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
