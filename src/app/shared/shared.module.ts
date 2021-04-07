import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomErrorComponent } from './components/custom-error/custom-error.component';

@NgModule({
  declarations: [CustomInputComponent, CustomErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CustomInputComponent, CustomErrorComponent]
})
export class SharedModule { }
