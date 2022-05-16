import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HeaderComponent implements OnInit {

  @Input() isAuthorized!: boolean | null;
  @Output() menuClicked = new EventEmitter();
 
  constructor(public authService: AuthService,) { }

  ngOnInit(): void {
  }

  onClicked(): void {
    this.menuClicked.emit();
  }
  


}
