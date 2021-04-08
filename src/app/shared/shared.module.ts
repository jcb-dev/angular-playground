import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFieldComponent } from './components/custom-field/custom-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomErrorComponent } from './components/custom-error/custom-error.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CustomFieldComponent, CustomErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [CustomFieldComponent, CustomErrorComponent]
})
export class SharedModule { }
