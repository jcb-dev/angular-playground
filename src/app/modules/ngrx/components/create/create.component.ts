import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx.state';
import { State } from '../../models/state.model';
import * as StateActions from '../../actions/state.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addState(id, name, value) {
    this.store.dispatch(new StateActions.AddState({ id: id, name: name, value: value }));
  }

  ngOnInit(): void {
  }

}
