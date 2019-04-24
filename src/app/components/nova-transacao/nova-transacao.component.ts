import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-transacao',
  templateUrl: './nova-transacao.component.html',
  styleUrls: ['./nova-transacao.component.scss']
})

export class NovaTransacaoComponent implements OnInit {

  @Output() novaTransacaoOutput = new EventEmitter();

  public extrato: any = [];
  public items: FormArray;
  public tipoObject = ['compra', 'venda'];
  public transacaoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.transacaoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      valor: ['', Validators.required]
    })
  }

  addItem(): void {
    // if (this.transacaoForm.invalid) {
    //   alert('Error: Favor preencher todos os campos.');
    //   return
    // }

    this.extrato.push(this.transacaoForm.controls);
    this.novaTransacaoOutput.emit(this.extrato);

    
    localStorage.setItem("transacoes", JSON.stringify(this.extrato));
  }
}