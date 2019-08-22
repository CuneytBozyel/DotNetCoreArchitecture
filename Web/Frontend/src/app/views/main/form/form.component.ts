import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({ selector: "app-form", templateUrl: "./form.component.html" })
export class AppFormComponent {
    disabled = false;

    form = this.formBuilder.group({
        country: ["", Validators.required],
        state: ["", Validators.required],
        city: ["", Validators.required]
    });

    constructor(private readonly formBuilder: FormBuilder) { }

    select() {
        this.form.patchValue({
            country: "1",
            state: "1",
            city: "1"
        });
    }
}
