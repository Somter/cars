import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-directive',
    standalone:true,
    imports:[CommonModule],
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.css']
  })

  export class DirectiveComponent implements OnInit {

    Car: string = 'Автомобиль';
    Airplane: string = 'Самолёт';
    Ship: string = 'Корабль';

    counter = 0;

    // plus(){
    //   if(this.counter < 4){
    //     this.counter++;
    //   } else{
    //     this.counter = 0;
    //   }
    // }

    PlusCar(){
        this.counter = 1;
       
    }

    PlusAirplane(){
        this.counter = 2
    }

    PlusShip(){
        this.counter = 3;
    }
  
   

  
    constructor() { }
    ngOnInit(): void {
    }
  
  }
  
