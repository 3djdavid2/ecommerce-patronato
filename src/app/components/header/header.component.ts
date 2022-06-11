import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Output() menuClicked = new EventEmitter();
  pEmail: any;
  admin!: boolean;

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

  onClicked(): void {
    this.menuClicked.emit();
  }

}
