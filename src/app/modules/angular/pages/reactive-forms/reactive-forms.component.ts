import { Component, Input, OnInit } from '@angular/core';
import { InputType } from 'src/app/shared/enums/field.enum';
import { FieldAttributes } from 'src/app/shared/models/field.model';
import { Person } from '../../models/person.model';
import { ReactiveFormsService } from '../../services/reactive-forms.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private reactiveFormsService: ReactiveFormsService) { }

  sampleField: Array<FieldAttributes> = new Array<FieldAttributes>();

  ngOnInit(): void {
    this.reactiveFormsService.getForm().subscribe((val: FieldAttributes[]) => {
      val.forEach(el => {

        let field = {} as FieldAttributes;
        field.placeholder = el.placeholder;
        field.value = el.value;
        field.minLength = el.minLength;
        field.maxLength = el.maxLength;
        field.required = el.required;
        field.options = el.options;
        field.type = el.type;

        this.sampleField.push(field);
      });
    });
  }

  submit() {
    let person = {} as Person;
    person.id = uuid();
    person.firstName = "Jojo";
    person.lastName = "Mojo";
    person.gender = 1;

    this.reactiveFormsService.addPerson(person).subscribe(val => {
      console.log("success", val);
    })
  }
}
