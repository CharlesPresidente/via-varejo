import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-transacao',
  templateUrl: './nova-transacao.component.html',
  styleUrls: ['./nova-transacao.component.scss']
})

export class NovaTransacaoComponent implements OnInit {

  public extrato: any = { total: 0, data: [] };
  public tipoObject = ['Compra', 'Venda'];
  public total = 0;
  public transacaoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.criarItem();
  }

  criarItem(): void {
    this.transacaoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      valor: ['', Validators.required]
    })
  }

  addItem(): void {
    //validacao
    if (this.transacaoForm.invalid) {
      alert('Error: Favor preencher todos os campos.');
      return
    }

    let controls = this.transacaoForm.controls;

    //data
    this.extrato.data.push({
      nome: controls.nome.value,
      tipo: controls.tipo.value,
      valor: controls.valor.value
    });

    //total
    if (controls.tipo.value === 'Venda') {
      this.extrato.total += parseFloat(controls.valor.value);
    } else {
      this.extrato.total -= parseFloat(controls.valor.value);
    }

    //salvar
    localStorage.setItem('transacoes', JSON.stringify(this.extrato));

    //limpar
    this.criarItem();
  }
}