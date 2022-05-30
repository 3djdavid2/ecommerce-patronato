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
  email:string;

  constructor(private router: Router) {
    this.email="dj.vivanco@gmail.com"
    this.formulario = new FormGroup({
      nombre: new FormControl('', [this.letrasValidators]),
      rut: new FormControl(''),
      telefono: new FormControl(''),
      direccion: new FormControl(''),
      
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
