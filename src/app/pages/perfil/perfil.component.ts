import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  formulario: FormGroup;
  pEmail: any;

  constructor(private router: Router,
    private perfilService: PerfilService,
    public authService: AuthService
  ) {

    this.pEmail = ''

    this.formulario = new FormGroup({
      nombre: new FormControl('', [this.letrasValidators]),
      rut: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl('')
    })
  }

  ngOnInit(): void {

    const token = this.authService.verifyToken()
    if (token) {

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

      //pedir datos usando email y mostrarlos en formulario de actualizacion

      this.perfilService.getMisDatos()
        .subscribe({
          next: (res: any) => {

            this.formulario.patchValue({
              nombre: res.nombre,
              rut: res.rut,
              direccion: res.direccion,
              telefono: res.telefono
            })
          },
          error: (e: any) => {
            console.log("el error es:", e)
          },
          complete: () => {
            console.info('completed')
          }
        })



    }


  }


  //Actualizar datos hacia bd
  onSubmit() {


    this.perfilService.putMisDatos(this.formulario.value)
      .subscribe({
        next: (res: any) => {

          if (res[0] === 1) {

            alert("Actualizado ok")

          } else {
            alert("Problemas al actualizar datos")
          }

        },
        error: (e: any) => {
          console.log("el error es:", e)
        },
        complete: () => {
          console.info('completed')
        }
      })

  }

  get f() {
    return this.formulario.controls;
  }

  letrasValidators(formControl: any) {
    const value = formControl.value;
    return null
  }

}
