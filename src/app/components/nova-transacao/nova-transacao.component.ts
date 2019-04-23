import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-transacao',
  templateUrl: './nova-transacao.component.html',
  styleUrls: ['./nova-transacao.component.scss']
})
export class NovaTransacaoComponent implements OnInit {

  public tipoObject: any = ['Compra', 'Venda'];
  public transacaoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.transacaoForm = this.formBuilder.group({
      tipo: ['Compra'],
      nome: ['', Validators.required],
      valor: ['R$ 0,00', Validators.required]
    })
  }

  get f() { return this.transacaoForm.controls; }

  registrar() {
    if (this.transacaoForm.invalid) {
      console.log('Registrar: Erro');
      return
    }

    console.log('Registrar: ', this.transacaoForm.controls);
  }
}
