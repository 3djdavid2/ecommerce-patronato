import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PerfilService } from '@app/services/perfil.service';
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
  empresa!:string;

  constructor(
    public authService: AuthService,
    public perfilService: PerfilService
  ) {
    this.pEmail = '';
    this.empresa= 'Patronato Telas'
  }

  ngOnInit(): void {


    this.authService.email$
      .subscribe({
        next: (res: any) => {

          this.pEmail = res
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
