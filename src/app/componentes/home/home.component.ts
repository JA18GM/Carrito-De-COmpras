import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sesionIniciada: boolean = false;

  logout() {
      
      this.sesionIniciada = false;
      console.log('Sesión cerrada');
}

}
