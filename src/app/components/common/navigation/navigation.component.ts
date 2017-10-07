import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var jQuery:any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements OnInit {
    username: any = "user";
    access: any ;
    constructor(private router: Router) {}

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }

    logout(){
    	this.router.navigate(['login']);	
    }
   
    ngOnInit() {

    }

}
