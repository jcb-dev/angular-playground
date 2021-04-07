import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgrxRoutingModule } from "./ngrx-routing.module";
import { StateComponent } from './pages/state-list/state-list.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StateReducer } from "./store/reducers/state.reducer";
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingReducer } from "./store/reducers/shopping.reducer";
import { FormsModule } from "@angular/forms";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { EffectsModule } from "@ngrx/effects";
import { ShoppingEffects } from "./store/effects/shopping.effects";
import { ShoppingService } from "./services/shopping.service";

@NgModule({
    declarations: [StateComponent, ReadComponent, CreateComponent, ShoppingListComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        NgrxRoutingModule,
        EffectsModule.forRoot([ShoppingEffects]),
        StoreModule.forRoot({
            shopping: ShoppingReducer
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [ShoppingService]
})
export class NgrxModule { }