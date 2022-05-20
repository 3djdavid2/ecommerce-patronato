
import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'

//importo el servicio
import { AuthService } from '../../services/auth.service'
//material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent {

  formIngreso: FormGroup;
  
  mensaje: string = "";
  verify: boolean = true;

  loading: boolean = false;
 
  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {


    this.formIngreso = new FormGroup({
      email: new FormControl('',
        [Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/)
        ]),
      password: new FormControl('',
        [Validators.required,
        Validators.minLength(6)
        ])

    })
  }


  get f() {
    return this.formIngreso.controls
  }

  async signin() {

    await new Promise(resolve => {
      this.loading = true
      setTimeout(resolve, 1000)

    });
    this.loading = false;
      
    this.authService.signIn(this.formIngreso.value)
      .subscribe({
        next: (res) => {

          if (res.token === 'tosignup') {
            alert("No existe email, se reenviará a registro");
            this.router.navigate(['/signup']);

          } else if (res.token === 'tomailconfirm') {
            alert("le enviamos un email de confirmacion")
          } else {

            localStorage.setItem('token', res.token);
            this.router.navigate(['/shop']);
          }

        },
        error: (e) => {
          console.error('signin error en respuesta de no token')
          this.mensaje = e.error.message
          this.verify = e.error.verify
          this.error();

        },
        complete: () => {
          console.info('signin completed')
        }
      })
  }

  error() {
    this._snackBar.open('Hay un error, favor revisar', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }



}