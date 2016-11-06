import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {SecondComponent} from './second/second.component';
import {FirstchildComponent} from './firstchild/firstchild.component';
import {SecondchildComponent} from './secondchild/secondchild.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'second', component: SecondComponent, children: [
        {path: 'firstchildcomp', component: FirstchildComponent, outlet:'firstchild'},
        {path: ':id', component: SecondchildComponent, outlet:'secondchild'}
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
}) 

export class RoutingModule {}