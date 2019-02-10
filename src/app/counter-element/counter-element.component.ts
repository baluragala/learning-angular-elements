import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-counter-element",
  templateUrl: "./counter-element.component.html",
  styleUrls: ["./counter-element.component.css"]
})
export class CounterElementComponent implements OnInit {
  @Input() initial = 0;
  counter;
  ngOnInit() {
    this.counter = this.initial;
  }
  inc() {
    this.counter++;
  }
  dec() {
    this.counter--;
  }
}
