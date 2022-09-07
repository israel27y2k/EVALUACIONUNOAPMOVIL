import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.page.html',
  styleUrls: ['./figuras.page.scss'],
})
export class FigurasPage implements OnInit {
  public figuras1 =[
    {
     nombre:'ASSASSINS CREED IV BLACK',
     precio:'$25.000',
    },
 ];
 public figuras2 =[
  {
   nombre:'GOD OF WAR RAGNAROK',
   precio:'$30.000',
  },
  ];
  public figuras3 =[
    {
     nombre:'DEVIL MAY CRY DANTE',
     precio:'$35.000',
    },
    ];

  public figuras4 =[
  {
   nombre:'BATMAN',
   precio:'$40.000',
  },
  ];
  constructor() { }

  ngOnInit() {
  }

}
