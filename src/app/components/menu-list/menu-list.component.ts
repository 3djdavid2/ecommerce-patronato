import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();
  pEmail!: any;

  constructor(public authService: AuthService) {
    this.pEmail = ''
  }

  ngOnInit(): void {

          this.authService.email$
        .subscribe({
          next: (res: any) => {

            this.pEmail = res.email
          },
          error: (e: any) => {
            console.log("el error es:", e)
          },
          complete: () => {
            console.info('completed')
          }
        })
    

  }

  closeMenu() {
    this.menuToggle.emit();

  }

}
