import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: `app-addTask`, /* Siempre desde de empezar por "app-"" */
  templateUrl: `./add.component.html`, /* Le añadimos la vista del componente */  
  styleUrl: `./add.component.css` /* Le añadimos el css */
})

/* Los componentes en angular son una clase que va a ser exportada, para llamarlos en los modulos */

export class AddComponent implements OnDestroy{

  /* constructor() {
    console.log("Creandose desde el constructor");
    
  }
  ngOnInit(): void {
      console.log("Creandose desde el ngOninit");
      
  } /* Se ejecuta cuando el componente se haya creado */
  
  ngOnDestroy(): void {
      console.log("El componente dd ha sido destruido");
      
  }
}


