import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  pEmail!: any;
  @Output() menuToggle = new EventEmitter<void>();
 
  constructor(public authService: AuthService) {
    this.pEmail = ''
  }

  ngOnInit(): void {
    this.authService.loggedIn
    this.authService.getEmail$().subscribe(email => {
      this.pEmail = email
    })
  }

  closeMenu() {
    this.menuToggle.emit();
    this.authService.logout();
  }

}
