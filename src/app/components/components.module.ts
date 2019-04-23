import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtratoTransacoesComponent } from './extrato-transacoes/extrato-transacoes.component';
import { NovaTransacaoComponent } from './nova-transacao/nova-transacao.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMMUN = [
  NovaTransacaoComponent,
  ExtratoTransacoesComponent
];

@NgModule({
  declarations: [COMMUN],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [COMMUN]
})

export class ComponentsModule { }
