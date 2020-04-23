import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  page = "recipes";

  changePage(page: string) {
    console.log(page);

    this.page = page;
  }
}
