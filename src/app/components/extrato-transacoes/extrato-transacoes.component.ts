import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrato-transacoes',
  templateUrl: './extrato-transacoes.component.html',
  styleUrls: ['./extrato-transacoes.component.scss']
})

export class ExtratoTransacoesComponent implements OnInit {

  @Input() extratoTransacoesInput: any = [];

  public total = 0;

  constructor() { }

  ngOnInit() {
    // for (let i = 0; i < this.extratoTransacoesInput.length; i++) {
    //   this.total += parseFloat(this.extratoTransacoesInput[i].valor.value);
    // }
    let transacoes = window.localStorage.getItem('transacoes');
    console.log(transacoes);
    
  }
}
