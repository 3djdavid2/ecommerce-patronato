import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HeaderComponent implements OnInit {

  pEmail!: any;
  @Output() menuClicked = new EventEmitter();

  constructor(public authService: AuthService) {
    this.pEmail = ''
  }

  ngOnInit(): void {
    this.authService.getEmail$().subscribe(email => {
      this.pEmail = email
    })
  }
  
  onClicked(): void {
    this.menuClicked.emit();
  }

}
