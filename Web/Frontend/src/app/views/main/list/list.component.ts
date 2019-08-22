import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Cacheable } from "ngx-cacheable";

@Component({ selector: "app-list", templateUrl: "./list.component.html" })
export class AppListComponent {
    list: any;

    constructor(private readonly http: HttpClient) {
        this.get().subscribe((list: any) => this.list = list);
    }

    @Cacheable()
    get() {
        return this.http.get("https://jsonplaceholder.typicode.com/users");
    }
}
