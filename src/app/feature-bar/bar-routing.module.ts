import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BarDetailComponent } from './components/bar-detail/bar-detail.component';
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'detail/:id',
        component: BarDetailComponent,
        canActivate: [AuthGuard] 
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BarRoutingModule {}