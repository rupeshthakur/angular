import { Component, Injectable, ViewChild, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
//import { UserComponent } from '../../componets/utils/user';

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  //styleUrls: ['./login.component.css'],
  // Here we tell Angular that we want the form
  // directives to be available in this component
})

export class LoginComponent implements OnInit {
  //inputLogo = 'assets/img/angularclass-logo.png';
  //model: UserComponent = new UserComponent(1, '', '');
  //logintext: string = 'Sign in to continue to the portal';

  color: string = 'black';
  loginform: FormGroup;
  //post:any;
  //username:string = '';
  //password:string = '';

  constructor(private router: Router) {
    //this.loginform = fb.group({
    //	'username' : [null, Validators.required],
    //	'password' : [null, Validators.required]
    //})

    let group: any = {};
    group.username = new FormControl('', Validators.required);
    group.password = new FormControl('', Validators.required);
    //group.type = new FormControl();
    this.loginform = new FormGroup(group);

  }
  ngOnInit() {
    console.log("Login Component");
  }

}

