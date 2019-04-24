import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControleFinanceiroComponent } from './pages/controle-financeiro/controle-financeiro.component';

const routes: Routes = [
  {
    path: 'home',
    component: ControleFinanceiroComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
