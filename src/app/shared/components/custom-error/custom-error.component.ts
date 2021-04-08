import { AfterContentInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.scss']
})
export class CustomErrorComponent implements OnInit {

  errorMessage: string;
  hasError: any;

  @Input() fieldName: string;
  @Input() set errorDetails(value: string) {
    this.hasError = value;
    if (value) this.setErrorMessage(value);
  }

  constructor() { }

  ngOnInit(): void {

  }

  setErrorMessage(validator: any) {
    if (validator['required'])
      this.errorMessage = `${this.fieldName} field is required.`;
    if (validator['minlength'])
      this.errorMessage = `${this.fieldName} field requires ${validator['minlength'].requiredLength} minimum characters.`;
    if (validator['maxlength'])
      this.errorMessage = `${this.fieldName} field requires ${validator['maxlength'].requiredLength} maximum characters.`;
  }

}
