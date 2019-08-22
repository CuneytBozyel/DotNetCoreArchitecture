import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppButtonModule } from "src/app/components/button/button.module";
import { AppLabelModule } from "src/app/components/label/label.module";
import { AppSelectCityModule } from "src/app/components/select/city/city.module";
import { AppSelectCountryModule } from "src/app/components/select/country/country.module";
import { AppSelectStateModule } from "src/app/components/select/state/state.module";
import { AppFormComponent } from "./form.component";

const routes: Routes = [
    { path: "", component: AppFormComponent }
];

@NgModule({
    declarations: [AppFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        AppButtonModule,
        AppLabelModule,
        AppSelectCityModule,
        AppSelectCountryModule,
        AppSelectStateModule
    ]
})
export class AppFormModule { }
