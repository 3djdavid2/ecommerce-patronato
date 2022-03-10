import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { regex, regexErrors, markFormGroupTouched } from '@app/shared/utils';

import { ControlItem } from '@app/models/frontend'

import { NotificationService } from '@app/services';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
  providers:[NotificationService]
})

export class SharedComponent implements OnInit {

  form!: FormGroup; //signo de admiracio !  para que fuerce la inicializacion
  isInline!: boolean;
  regexErrors = regexErrors;

  items!: ControlItem[];

  showSpinner = false;

  constructor(private fb: FormBuilder, private notification: NotificationService) {
    this.isInline = true; //para que todos los controles esten en forma horizontal-clase60-24:27-
    this.items = [

      { label: 'Uno', value: 1 },
      { label: 'Dos', value: 2 },
      { label: 'Tres', value: 3 },
      { label: 'Cuatro', value: 4 },
      { label: 'Cinco', value: 5 },
    ]
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.number)//regex.email para validar solo emails*-*-*-*-**-
        ]
      }],
      password: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],
      autocomplete: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],
      select: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      radios: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
    });


  }

  onPatchValue(): void {

    this.form.patchValue({
      input: '988',
      password: 'miPass',
      autocomplete: 1,
      select: 2,
      checkboxes: [3],
      radios: 4,
      date: new Date().getTime(),
      dateRange: {
        from: new Date(2020, 5, 5).getTime(),
        to: new Date(2021, 5, 5).getTime(),
      }



    });

    // this.form.get("select")?.patchValue(3)
    // console.log("la fechaa es:", new Date(this.form.value.date).toISOString().slice(0, 10))


  }

  onSubmit(): void {

    if (this.form.invalid) {
      markFormGroupTouched(this.form)
    } else {
      console.log("Formulario enviado ok")
    }

  }

  //cambia de horizontal a vertical y viceversa
  organizarElemento() {
    this.isInline = !this.isInline;
  }

  onToggleDisabled() {
    if (this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }


  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner

  }

  onError(): void {

    this.notification.error("Hay un error!")
  }
  onSuccess(): void { 

    this.notification.success("El procedimiento fue exitoso")
  }
}
