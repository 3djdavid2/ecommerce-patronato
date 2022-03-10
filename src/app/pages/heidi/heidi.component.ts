import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-heidi',
  templateUrl: './heidi.component.html',
  styleUrls: ['./heidi.component.scss']
})
export class HeidiComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
