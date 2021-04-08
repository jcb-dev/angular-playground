import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsService } from './services/reactive-forms.service';

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [
    CommonModule,
    AngularRoutingModule,
    SharedModule
  ],
  providers: [ReactiveFormsService]
})
export class AngularModule { }
