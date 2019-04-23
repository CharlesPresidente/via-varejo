import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

const COMMUN = [
  MenuComponent
];

@NgModule({
  declarations: [COMMUN],
  imports: [
    CommonModule
  ],
  exports: [COMMUN]
})

export class SharedModule { }
