import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  @Output() chosePage = new EventEmitter<{ string }>();
  selcetPage(chosenPage){
    console.log('in');
    
    this.chosePage.emit(
      chosenPage
    );
  }
}
