import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-extrato-transacoes',
  templateUrl: './extrato-transacoes.component.html',
  styleUrls: ['./extrato-transacoes.component.scss']
})

export class ExtratoTransacoesComponent implements OnInit, DoCheck {

  public extratoObject: any = [];
  public total = 0;

  constructor() { }

  ngOnInit() { }

  ngDoCheck() {
    let transacoes = JSON.parse(localStorage.getItem('transacoes'));

    if (!transacoes) {
      return
    }

    this.total = transacoes.total;
    this.extratoObject = transacoes.data;
  }
}
