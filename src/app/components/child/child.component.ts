import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Output() childData = new EventEmitter();

  ngOnInit() {
  }
  submitForm(data){
    console.log("data", data);
    this.childData.emit(data);
  }

}
