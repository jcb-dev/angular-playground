import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseLayoutComponent } from "./layouts/base-layout/base-layout.component";

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./modules/home/home.module')
                        .then(m => m.HomeModule)
            },
            {
                path: 'ngrx',
                loadChildren: () =>
                    import('./modules/ngrx/ngrx.module')
                        .then(m => m.NgrxModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }