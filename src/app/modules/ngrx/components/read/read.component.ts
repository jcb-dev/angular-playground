import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from '../../store/ngrx.state';
import { State } from '../../store/models/state.model';

import * as StateActions from '../../store/actions/state.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  states: Observable<State[]>;

  constructor(private store: Store<AppState>) {
    this.states = store.select('state');
  }

  delState(index) {
    this.store.dispatch(new StateActions.RemoveState(index));
  }

  ngOnInit(): void {
  }

}
