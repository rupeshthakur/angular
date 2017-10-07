import { Component } from '@angular/core';
//import { smoothlyMenu } from '../../../app.helpers';
import { Router } from '@angular/router';
//declare var jQuery:any;

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html'
})
export class TopnavbarComponent {
    constructor(private router: Router,) { }

    //toggleNavigation(): void {
    //    jQuery("body").toggleClass("mini-navbar");
    //    smoothlyMenu();
    //}
   
    logout(){

        this.router.navigate(['home']);
    }

}
