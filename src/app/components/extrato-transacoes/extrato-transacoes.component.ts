import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extrato-transacoes',
  templateUrl: './extrato-transacoes.component.html',
  styleUrls: ['./extrato-transacoes.component.scss']
})

export class ExtratoTransacoesComponent implements OnInit {

  @Input() extratoTransacoesInput: any = { total: 0, data: [] };

  public extratoObject: any = [];
  public total = 0;

  constructor() { }

  ngOnInit() { }

  ngOnChachangenges() {
    if (!this.extratoTransacoesInput) {
      return
    }

    this.total = this.extratoTransacoesInput.total;
    this.extratoObject = this.extratoTransacoesInput.data;
  }
}
