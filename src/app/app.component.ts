import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @Input() childData;
  dataFromChild: any;

  getChildData(data){
    console.log("child data:", data);
    this.dataFromChild = data;
  }

}
