//import { DataService } from './../data.service';
import { CarddataService } from './../carddata.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-fancy-example',
  templateUrl: './card-fancy-example.component.html',
  styleUrls: ['./card-fancy-example.component.scss']
})
export class CardFancyExampleComponent implements OnInit {

  constructor(public _carddataservice: CarddataService) { }

  //first_name: string = "trying";
  //@Input public parentData;  
   // parentData = "some text to be displayed" ;
    // first_name: string = [];

  // manju () (somedata => {
  //   return  this._carddataservice.first_name;
  // });

  // get data():string { 
  //   return this._CarddataService.DataService; 
  // } 
  // set data(value: string) { 
  //   this._CarddataService.serviceData = value; 
  // } 

    ngOnInit() {
   // console.log(this._carddataservice.DataService());
    
  }
  
  returndata(){
    this._carddataservice.returndata();
  }
   
  
}
