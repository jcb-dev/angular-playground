import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgrxRoutingModule } from "./ngrx-routing.module";
import { StateComponent } from './pages/state-list/state-list.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from "./store/reducers/state.reducer";
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingReducer } from "./store/reducers/shopping.reducer";
import { FormsModule } from "@angular/forms";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';

@NgModule({
    declarations: [StateComponent, ReadComponent, CreateComponent, ShoppingListComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgrxRoutingModule,
        StoreModule.forRoot({
            state: reducer,
            shopping: ShoppingReducer
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ]
})
export class NgrxModule { }