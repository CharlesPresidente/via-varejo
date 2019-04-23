import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleFinanceiroModule } from './controle-financeiro/controle-financeiro.module';

const COMMUN = [ControleFinanceiroModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControleFinanceiroModule
  ]
})

export class PagesModule { }
