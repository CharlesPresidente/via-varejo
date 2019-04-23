import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtratoTransacoesComponent } from './extrato-transacoes/extrato-transacoes.component';
import { NovaTransacaoComponent } from './nova-transacao/nova-transacao.component';

const COMMUN = [
  NovaTransacaoComponent,
  ExtratoTransacoesComponent
];

@NgModule({
  declarations: [COMMUN],
  imports: [
    CommonModule
  ],
  exports: [COMMUN]
})

export class ComponentsModule { }
