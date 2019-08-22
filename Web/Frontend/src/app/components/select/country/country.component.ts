import { Component } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Observable, of } from "rxjs";
import { OptionModel } from "../option.model";
import { AppSelectComponent } from "../select.component";

@Component({
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: AppSelectCountryComponent, multi: true }],
    selector: "app-select-country",
    templateUrl: "../select.component.html"
})
export class AppSelectCountryComponent extends AppSelectComponent {
    getOptions(_: string): Observable<OptionModel[]> {
        const options = new Array<OptionModel>();

        options.push(new OptionModel("Country 1", "1"));
        options.push(new OptionModel("Country 2", "2"));
        options.push(new OptionModel("Country 3", "3"));

        return of(options);
    }
}
