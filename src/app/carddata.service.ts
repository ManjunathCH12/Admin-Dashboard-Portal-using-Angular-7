import { Injectable } from '@angular/core';
import { Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarddataService {

  //@input() serviceData string;
    first_name: string = "some text to display";
    public name = "manju";
 
  constructor() { }

  
    returndata(){
    console.log(this.first_name);
  }

 
}