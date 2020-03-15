import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  detail = false;
  timeStamp: Array<number> = [];
  constructor() {}

  ngOnInit(): void {}
  showDetail() {
    let d = new Date();
    let time = d.getTime();
    this.timeStamp.push(time)
    this.detail = !this.detail;
    console.log(this.timeStamp);
  }
  getColor(time){
    return  this.timeStamp.indexOf(time) > 4? 'white': 'black'  }
  getBackgroundColor(time){
    return  this.timeStamp.indexOf(time) > 4? 'blue': 'white'

  }
}
