import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-financeiro',
  templateUrl: './controle-financeiro.component.html',
  styleUrls: ['./controle-financeiro.component.scss']
})

export class ControleFinanceiroComponent implements OnInit {

  public extratoTransacoesInput: any = [];

  constructor() { }

  ngOnInit() { }

  novaTransacaoOutput(param): void {
    this.extratoTransacoesInput = param;
  }
}
