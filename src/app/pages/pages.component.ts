import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
    pasarDatosHijo="";

    obtenerdatos(event:any){
        this.pasarDatosHijo=event;
    }
}