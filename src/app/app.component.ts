import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'log-in' },
    { title: 'Juegos', url: '/juegos', icon: 'game-controller' },
    { title: 'Accesorios', url: '/accesorios', icon: 'train' },
    { title: 'Figuras', url: '/figuras', icon: 'walk' },
   
  ];
  public labels = ['Direccion: Alameda 999, local 404', 
                   'gameshop@gmail.com', 
                   'Contacto:+5692536255',];
  constructor() {}
}
