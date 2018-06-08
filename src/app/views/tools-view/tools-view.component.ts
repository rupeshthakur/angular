import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'toolsView',
    templateUrl: 'tools-view.template.html'
})
export class toolsViewComponent implements OnInit {


	constructor(private router: Router) {

  	}

  	ngOnInit() {
    	console.log("Tools View Component");
  	}
}