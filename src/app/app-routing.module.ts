import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: []
    },
    {
        path: 'bar',
        loadChildren: './feature-bar/bar.module#BarModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
        useHash: true
    })],
    exports: [RouterModule]
})

export class AppRoutingModule {}