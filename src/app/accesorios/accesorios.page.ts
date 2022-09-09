import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.page.html',
  styleUrls: ['./accesorios.page.scss'],
})
export class AccesoriosPage implements OnInit {
  public accesorio = [
    {
      nombre: 'PALANCA PLAY 4',
      precio: '$55.000',
    },
    {
      nombre: 'TECLADO GAMER ',
      precio: '$35.000',
    },
    {
      nombre: 'AUDIFONOS GAMER T4',
      precio: '$45.000',
    },
    {
      nombre: 'MAUS F4',
      precio: '$38.000',
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
