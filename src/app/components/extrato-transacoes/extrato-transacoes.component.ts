import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrato-transacoes',
  templateUrl: './extrato-transacoes.component.html',
  styleUrls: ['./extrato-transacoes.component.scss']
})

export class ExtratoTransacoesComponent implements OnInit {

  @Input() extratoTransacoesInput;

  public extratoObject: any = [
    {
      'nome': 'Sapato',
      'tipo': 'venda',
      'valor': 9.09
    },
    {
      'nome': 'Monitor',
      'tipo': 'compra',
      'valor': 82.00
    },
  ];
  public total = 0;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.extratoObject.length; i++) {
      this.total += parseFloat(this.extratoObject[i].valor);
    }
  }
}
