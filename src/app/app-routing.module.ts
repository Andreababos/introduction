import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent }  from './detail/detail.component';

const routes: Routes = [
    { path: '?method=track.getInfo&api_key=7fe1ce53531d0d3549c73fdc310d0220&mbid=:id&format=json', component: DetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
