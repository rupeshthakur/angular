import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { correctHeight, detectBody } from './app.helpers';
import { AppState } from './app.service';
declare var jQuery:any;


//@Component({
//  selector: 'app',
//  encapsulation: ViewEncapsulation.None,
//  templateUrl: './app.component.html',
//})
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(public appState: AppState) { }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
