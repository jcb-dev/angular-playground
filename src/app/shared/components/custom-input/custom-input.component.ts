import { AfterContentInit, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldAttributes } from '../../models/field.model';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit, AfterContentInit {

  @Input() value?: any;
  @Input() attributes?: FieldAttributes;

  @Output() outputValue: EventEmitter<any>;

  formControl: FormControl;
  hasError: any;

  constructor(private _formBuilder: FormBuilder, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.formControl = this._formBuilder.control(this.attributes.value);

    if (this.attributes.required) {
      this.setValidators("required", this.attributes.required);
    }

    if (this.attributes.minLength) {
      this.setValidators("minLength", this.attributes.minLength);
    }

    if (this.attributes.maxLength) {
      this.setValidators("maxLength", this.attributes.maxLength);
    }

    this.changeDetectorRef.detectChanges();
  }

  setValidators(validator: string, value: any) {
    if (!this.formControl.validator) {
      switch (validator) {
        case "required":
          this.formControl.setValidators([Validators.required]);
          break;
        case "minLength":
          this.formControl.setValidators([Validators.minLength(value)]);
          break;
        case "maxLength":
          this.formControl.setValidators([Validators.maxLength(value)]);
          break;
      }
    } else {
      switch (validator) {
        case "required":
          this.formControl.setValidators([this.formControl.validator, Validators.required]);
          break;
        case "minLength":
          this.formControl.setValidators([this.formControl.validator, Validators.minLength(value)]);
          break;
        case "maxLength":
          this.formControl.setValidators([this.formControl.validator, Validators.maxLength(value)]);
          break;
      }
    }
  }

  sendErrorDetails() {
    return this.formControl.errors;
  }

}
