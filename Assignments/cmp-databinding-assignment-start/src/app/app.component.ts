import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public oddNumber = [];
  public evenNumber = [];
  makeOddOrEven(time: { time: number }) {
    if (time.time % 2 === 0) {
      this.evenNumber.push(time.time);
    } else {
      this.oddNumber.push(time.time);
    }
  }
}
