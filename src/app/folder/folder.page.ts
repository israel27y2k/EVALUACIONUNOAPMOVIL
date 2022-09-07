import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private router: Router 
    ) { }

  ngOnInit() {
  }

  verUsuario(nombre:String){
    let url = `usuario/${nombre}`;

    this.router.navigate([url])
  }

}
