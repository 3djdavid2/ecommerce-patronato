
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms'

//importo el servicio
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  formRegistro: FormGroup;

  mensaje: string = "";
  verify: boolean = true;


  constructor(
    private authService: AuthService,
    private router: Router) {


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

  ngOnInit(): void {
  }


  comparaPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const passwordConfirm = control.get('passwordConfirm');

    return password && passwordConfirm && password.value === passwordConfirm.value ? null : { coinciden: true };
  };


  get f() { return this.formRegistro.controls; }


  signup() {

    this.authService.signUp(this.formRegistro.value)
      .subscribe({
        next: (res) => {

          if (res.token === 'tosignin') {            
            this.router.navigate(['/signin']);

          } else if(res.token === 'tomailconfirm'){
            console.log("se enviará un email de confirmacion")
          }else{

            localStorage.setItem('token', res.token);
            this.router.navigate(['/shop']);
          }
         


        },
        error: (e) => {

          this.mensaje = e.error.message
          this.verify = e.error.verify
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

}
