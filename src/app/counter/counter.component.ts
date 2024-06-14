import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls:[ './counter.component.css']
})
export class counter {
  addtoCart:number=0;

  increaseCounte(){;
    this.addtoCart++
  }
  decreaseCount(){
    this.addtoCart--;
  }
}
