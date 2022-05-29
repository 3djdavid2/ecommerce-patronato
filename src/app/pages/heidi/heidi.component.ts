import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-heidi',
  templateUrl: './heidi.component.html',
  styleUrls: ['./heidi.component.scss']
})
export class HeidiComponent implements OnInit {
ies!:any[];
  constructor(public authService: AuthService) {
    this.ies=[1,2,3]
   }

  ngOnInit(): void {
  }

}
