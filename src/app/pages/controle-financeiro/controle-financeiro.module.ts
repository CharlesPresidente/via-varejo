import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleFinanceiroComponent } from './controle-financeiro.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ControleFinanceiroComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ControleFinanceiroModule { }
