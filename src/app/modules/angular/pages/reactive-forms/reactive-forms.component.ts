import { Component, Input, OnInit } from '@angular/core';
import { InputType } from 'src/app/shared/enums/field.enum';
import { FieldAttributes, FieldOutput } from 'src/app/shared/models/field.model';
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
  fieldOutput: FieldOutput[] = new Array<FieldOutput>();

  todoId: number;

  ngOnInit(): void {
    this.todoId = uuid();
    this.reactiveFormsService.setTodoList("id", this.todoId);

    this.reactiveFormsService.getTodoList();
    this.reactiveFormsService.getTodoFields().subscribe((val: FieldAttributes[]) => {
      val.forEach(el => {

        let field = {} as FieldAttributes;
        field.label = el.label;
        field.placeholder = el.placeholder;
        field.minLength = el.minLength;
        field.maxLength = el.maxLength;
        field.required = el.required;
        field.options = el.options;
        field.type = el.type;
        field.model = el.model;

        this.sampleField.push(field);
      });
    });

    this.reactiveFormsService.todoList.subscribe(value => {
    });

    this.reactiveFormsService.todo.subscribe(value => {
      console.log(value);
    });
  }

  setValue(event: FieldOutput) {
    this.reactiveFormsService.setTodoList(event.model, event.value);
  }

}
