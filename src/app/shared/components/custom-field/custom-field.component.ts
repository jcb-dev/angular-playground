import { AfterContentInit, AfterViewInit, ChangeDetectorRef, EventEmitter, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { FieldAttributes, FieldOutput } from '../../models/field.model';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'custom-field',
  templateUrl: './custom-field.component.html',
  styleUrls: ['./custom-field.component.scss']
})
export class CustomFieldComponent implements OnInit {

  @Output() outputValue: EventEmitter<FieldOutput> = new EventEmitter<FieldOutput>();
  @Input() value?: any;
  @Input() set attributes(value: FieldAttributes) {
    this._attributes = value;
    this.setAttributes(value)
  }

  formControl: FormControl;
  hasError: any;

  _attributes: FieldAttributes;

  constructor(private _formBuilder: FormBuilder) {
    this.formControl = this._formBuilder.control('');
  }

  formControlSubscription$: Subscription;
  formControlSubject = new Subject<string>();

  ngOnInit(): void {
    this.formControlSubscription$ = this.formControlSubject
      .pipe(debounceTime(500))
      .subscribe(value => {
        let output = { value: value, model: this._attributes.model };
        this.outputValue.emit(output);
      });
  }

  setAttributes(value: FieldAttributes) {
    if (value) {
      if (value.required) {
        this.setValidators("required", value.required);
      }

      if (value.minLength) {
        this.setValidators("minLength", value.minLength);
      }

      if (value.maxLength) {
        this.setValidators("maxLength", value.maxLength);
      }
    }
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

  setErrorMessage(validator: any) {
    let errorMessage = ''

    if (!validator)
      return;

    if (validator['required'])
      errorMessage = `${this._attributes.label} field is required.`;
    if (validator['minlength'])
      errorMessage = `${this._attributes.label} field requires ${validator['minlength'].requiredLength} minimum characters.`;
    if (validator['maxlength'])
      errorMessage = `${this._attributes.label} field requires ${validator['maxlength'].requiredLength} maximum characters.`;

    return errorMessage;
  }

  setFormControlValue() {
    this.formControlSubject.next(this.formControl.value);
  }
}
