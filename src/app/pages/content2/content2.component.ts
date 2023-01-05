import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component {
//OBJETO JSON
  valores=[
    { titulo:"", contenido:"" }
  ];
  data=Object.values(this.valores);


// VALORES
contador = 0;
show=false;
  valor1:string= "";
  valor2:string= "";

//importando valor de padre a hijo
  @Input()
  textohijo2:any;
  
  guardar(){
    for (let i = 0; i < this.textohijo2.length; i++) {
      this.valor1= this.textohijo2[i].titulo;
      this.valor2= this.textohijo2[i].content
      this.contador = i;
    }
    if(this.valor1 === "" || this.valor2 === ""){
          alert("Ingrese primero una palabra min: 8 caracteres")
    }else{
    this.valores.push({ titulo:this.contador+"#-"+this.valor1, contenido:`//`+this.valor2});
    this.data = Object.values(this.valores);};
  }

  // borrar(){
  //   delete this.valores[3];
  // }
}
