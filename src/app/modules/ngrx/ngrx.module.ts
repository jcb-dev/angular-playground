import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgrxRoutingModule } from "./ngrx-routing.module";
import { StateComponent } from './pages/state/state.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from "./reducers/state.reducer";
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
    declarations: [StateComponent, ReadComponent, CreateComponent],
    imports: [
        CommonModule,
        NgrxRoutingModule,
        StoreModule.forRoot({
            state: reducer
        })
    ]
})
export class NgrxModule { }