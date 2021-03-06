import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog'
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
    imports: [
        MatSliderModule,
        MatTabsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatRadioModule,
        MatDialogModule,
        MatBadgeModule,
        MatTableModule,
        MatStepperModule,
        MatExpansionModule



    ],
    exports: [
        MatSliderModule,
        MatTabsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatRadioModule,
        MatDialogModule,
        MatBadgeModule,
        MatTableModule,
        MatStepperModule,
        MatExpansionModule
    ]
})


export class MaterialModule { }