import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgrxRoutingModule } from "./ngrx-routing.module";
import { StateComponent } from './pages/state/state.component';

@NgModule({
    declarations: [StateComponent],
    imports: [
        CommonModule,
        NgrxRoutingModule
    ]
})
export class NgrxModule { }