import { Component , EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component {
  tarea!:string
  contenido!:string

  //OBJETO JSON
  tabla=[
    {titulo:this.tarea , content:this.contenido}
  ];
  
  data=Object.values(this.tabla);


//  EXPORTAR DATOS TIPO ONJETO AL PADRE
 @Output() Pasardatospadre = new EventEmitter<any>();

 Enviar(){
    this.tabla.push({ titulo:this.tarea, content:this.contenido});
    this.data = Object.values(this.tabla);
  if (this.formLogin.invalid === false) {
    this.Pasardatospadre.emit(this.data);
 }else{
  
 }
  // this.tabla.push({ titulo:this.tarea, content:this.contenido});
  // this.data = Object.values(this.tabla);
  // this.Pasardatospadre.emit(this.data);
 }

 //VALIDACION
 //VALORES
public formLogin!: FormGroup;
correo!:string;

constructor(private formBuilder:FormBuilder){

}
 ngOnInit():void{
  this.formLogin = this.formBuilder.group({
    msg:['', 
    [
      Validators.required,
      Validators.minLength(8)
    ]
  ],
  })
}
}
// COMANDO PARA TRAER DATOS
//  @Input() texto: string = "Holaa";