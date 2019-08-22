import { Component } from "@angular/core";
import { FileModel } from "src/app/models/file/file.model";

@Component({ selector: "app-files", templateUrl: "./files.component.html" })
export class AppFilesComponent {
    files = new Array<FileModel>();
}
