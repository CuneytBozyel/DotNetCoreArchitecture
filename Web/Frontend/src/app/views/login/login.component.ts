import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AppUserService } from "src/app/services/user.service";

@Component({ selector: "app-login", templateUrl: "./login.component.html" })
export class AppLoginComponent {
    form = this.formBuilder.group({
        login: ["admin", Validators.required],
        password: ["admin", Validators.required]
    });

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly appUserService: AppUserService) {
    }

    signIn() {
        this.appUserService.signIn(this.form.value);
    }
}
