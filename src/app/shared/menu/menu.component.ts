import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public fecharIcon = '../../../assets/icons/fechar.svg';
  public logoIcon = '../../../assets/icons/logo.PNG';
  public menuIcon = '../../../assets/icons/menu.svg';
  public menuObject: any = ['Dashbord', 'Resumo', 'Configurações']

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    let menu = document.querySelector('ul');
    menu.classList.toggle('menu-aberto');
  }
}
