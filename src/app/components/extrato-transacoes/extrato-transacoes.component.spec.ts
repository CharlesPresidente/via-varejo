import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoTransacoesComponent } from './extrato-transacoes.component';

describe('ExtratoTransacoesComponent', () => {
  let component: ExtratoTransacoesComponent;
  let fixture: ComponentFixture<ExtratoTransacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtratoTransacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoTransacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
