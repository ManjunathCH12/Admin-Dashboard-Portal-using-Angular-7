import { Component, OnInit } from '@angular/core';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MatAutocompleteModule, MatInputModule,MatFormFieldModule } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'myapp';

  constructor() { }

  ngOnInit() {
  }

}
