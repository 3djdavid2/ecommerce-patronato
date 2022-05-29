import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  formulario: FormGroup;
  constructor(private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [this.letrasValidators]),
      rut: new FormControl(''),
      telefono: new FormControl(''),
      direccion: new FormControl(''),
      email: new FormControl('', [Validators.required,
      Validators.pattern(/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/)
      ]),

    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formulario.value)
    // this.contactService.sendMessage(this.formulario.value)
    //   .subscribe({
    //     next: (res: any) => {

    //       alert(res.message)
    //       this.router.navigate(['/home']);
    //     },
    //     error: (e: any) => {
    //       console.log("el error es:", e)
    //     },
    //     complete: () => {
    //       console.info('completed')
    //     }
    //   })
  }

  get f() {
    return this.formulario.controls;
  }

  letrasValidators(formControl: any) {
    const value = formControl.value;
    return null

  }

}
