import { Component, OnInit } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public numberRandom : number;
  public textResult: string;

  private textArray = ["Geste", "Forme", "GestForm", "n"];
  private divisibleArray = [3, 5];
  private numberRandomMin = -1000;
  private numberRandomMax = 1000;

  ngOnInit() {
  }

  // Create random number
  randomFunctionNumber(){
      return this.numberRandom = Math.floor(Math.random() * (this.numberRandomMax - this.numberRandomMin)) + this.numberRandomMin;
  }

  // Verify if divisible function
  divisibleNumber(actualNumber : number, divisibleNumber: number){
    return actualNumber % divisibleNumber == 0 ? true : false;
  }

  // text distribution function
  nameNumberFunction(number: number){
    if(this.divisibleNumber(number,this.divisibleArray[0]) && this.divisibleNumber(number,this.divisibleArray[1])){
      this.textResult = this.textArray[2];
    } else if (this.divisibleNumber(number,this.divisibleArray[0])) {
      return this.textResult = this.textArray[0];
    } else if (this.divisibleNumber(number,this.divisibleArray[1])) {
      return this.textResult = this.textArray[1];
    } else {
      return this.textResult = this.textArray[3];
    }
  }

  // Launch by click
  launchTest(){
    this.randomFunctionNumber();
    this.nameNumberFunction(this.numberRandom);
  }




}
