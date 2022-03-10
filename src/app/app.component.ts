import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Papeleria';
  f = new Date();
  fecha = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'short' }).format(this.f);


  constructor(
    public authService: AuthService    
  ) { }

  ngOnInit() {
    
  }









}
