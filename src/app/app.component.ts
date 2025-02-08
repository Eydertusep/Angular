import { AfterViewInit, Component } from '@angular/core';
import { clearInterval } from 'node:timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  /*ngAfterViewInit(): void {
      console.log("han sido inicializadas la vista de los componentes y la vista de lo hijos");
      
  }*/
  
  isDestroyed: boolean = true;

  countDown: number;
  intervalID: any; // Any = El tipo puede ser de cualquier cosa

  constructor() {
    this.countDown = 10; 
    this.intervalID = setInterval(() => {
      this.countDown--;
      if (this.countDown === 0) {
        clearInterval(this.intervalID)
        this.isDestroyed = false
      }
    }, 100000)
  }
  
}
