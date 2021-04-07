import { Component, Input, OnInit } from '@angular/core';
import { InputType } from 'src/app/shared/enums/field.enum';
import { FieldAttributes } from 'src/app/shared/models/field.model';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  sampleField: FieldAttributes;

  ngOnInit(): void {
    this.sampleField = {} as FieldAttributes;
    this.sampleField.placeholder = "First Name";
    this.sampleField.value = "John";
    this.sampleField.minLength = 5;
    this.sampleField.maxLength = 10;
    this.sampleField.required = true;
    this.sampleField.type = InputType.INPUT;
  }
}
