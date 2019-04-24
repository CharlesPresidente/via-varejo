import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-transacao',
  templateUrl: './nova-transacao.component.html',
  styleUrls: ['./nova-transacao.component.scss']
})

export class NovaTransacaoComponent implements OnInit {

  @Output() novaTransacaoOutput = new EventEmitter();

  public items: FormArray;
  public tipoObject: any = ['Compra', 'Venda'];
  public transacaoForm: FormGroup;

  constructor(private form: FormBuilder) { }

  ngOnInit() {
    this.transacaoForm = this.form.group({
      items: this.form.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.form.group({
      tipo: ['', Validators.required],
      nome: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }


  get f() { return this.transacaoForm.controls; }

  registrar() {
    if (this.transacaoForm.invalid) {
      alert("Favor preencher todos os campos!");
      return
    }

    this.items = this.transacaoForm.get('items') as FormArray;
    this.items.push(this.createItem());

    this.novaTransacaoOutput.emit();
  }
}
