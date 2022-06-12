
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms'
//importo el servicio
import { AuthService } from '../../services/auth.service'
//material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {

  formRegistro: FormGroup;

  mensaje: string = "";
  verify: boolean = true;

  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {


    this.formRegistro = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/)
      ]),
      password: new FormControl('', [
        Validators.required

      ]),
      passwordConfirm: new FormControl('', [
        Validators.required

      ])
    }, { validators: this.comparaPass })

  }

  comparaPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const passwordConfirm = control.get('passwordConfirm');

    return password && passwordConfirm && password.value === passwordConfirm.value ? null : { coinciden: true };
  };


  get f() {
    return this.formRegistro.controls
  }


  async signup() {

    await new Promise(resolve => {
      this.loading = true
      setTimeout(resolve, 6000)

    });

    this.loading = false;

    this.authService.signUp(this.formRegistro.value)
      .subscribe({
        next: (res) => {

          if (res.token === 'tosignin') {

            alert("Ya existe email, se reenviará a Login");
            this.router.navigate(['/signin']);

          } else if (res.token === 'tomailconfirm') {
            alert("se enviará un email de confirmacion")
            this.router.navigate(['/shop']);
          } else {

            localStorage.setItem('token', res.token);
            this.router.navigate(['/shop']);
          }

        },
        error: (e) => {
          console.error('signup error en respuesta de no token')
          this.mensaje = e.error.message
          this.verify = e.error.verify
          this.error();

        },
        complete: () => {
          console.info('signup complete')
          this.formRegistro = new FormGroup({
            email: new FormControl(),
            password: new FormControl(),
            passwordConfirm: new FormControl(),
          })
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
