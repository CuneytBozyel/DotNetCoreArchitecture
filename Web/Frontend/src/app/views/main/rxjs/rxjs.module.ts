import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRxjsComponent } from "./rxjs.component";

const routes: Routes = [
    { path: "", component: AppRxjsComponent }
];

@NgModule({
    declarations: [AppRxjsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class AppRxjsModule { }
