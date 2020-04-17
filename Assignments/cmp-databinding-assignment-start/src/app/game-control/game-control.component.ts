import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStart = new EventEmitter<{time: number}>();
  public time = 0;
  public timeInterval: any;
  constructor() { }

  ngOnInit(): void {
  }
  startGame() {
     this.timeInterval = setInterval(() => {
      this.gameStart.emit({
        time: this.time
      }
      );
      this.time += 1;
      console.log(this.time);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.timeInterval);
  }
}
