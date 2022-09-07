import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {
  public juegos1 =[
    {
     nombre:'JURASSIC WORLD EVOLUTION',
     precio:'$50.000',
    },
 ];
 public juegos2 =[
  {
   nombre:'GOD OF WAR RAGNAROK',
   precio:'$60.000',
  },
  ];
  public juegos3 =[
    {
     nombre:'HORIZON',
     precio:'$62.000',
    },
    ];

  public juegos4 =[
  {
   nombre:'BATTLEFIELD',
   precio:'$45.000',
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
