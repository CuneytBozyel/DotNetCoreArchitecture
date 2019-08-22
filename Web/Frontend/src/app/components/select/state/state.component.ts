import { Component } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Observable, of } from "rxjs";
import { OptionModel } from "../option.model";
import { AppSelectComponent } from "../select.component";

@Component({
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: AppSelectStateComponent, multi: true }],
    selector: "app-select-state",
    templateUrl: "../select.component.html"
})
export class AppSelectStateComponent extends AppSelectComponent {
    getOptions(filter: string): Observable<OptionModel[]> {
        if (!filter) {
            return of([]);
        }

        let options = new Array<OptionModel>();

        options.push(new OptionModel("State 1", "1"));
        options.push(new OptionModel("State 2", "2"));
        options.push(new OptionModel("State 3", "3"));

        options = options.filter((option) => option.value === filter);

        return of(options);
    }
}
