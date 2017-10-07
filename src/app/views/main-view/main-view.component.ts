import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'mianView',
    templateUrl: 'main-view.template.html'
})

export class mainViewComponent implements OnInit {
  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.authService.isAuth()
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
  }

  /**
   * Fetch the data from the python-flask backend
  public getData() {
    this._service.getDataFromBackend()
      .subscribe(
      data => this.handleData(data),
      err => this.logError(err),
      () => console.log('got data')
      );
  }

  private handleData(data: Response) {
    if (data.status === 200) {
      let receivedData = data.json();
      this.heroes = receivedData['Heroes'];
    }
    console.log(data.json());
  }
   */

  private logError(err: Response) {
    console.log('There was an error: ' + err.status);
    if (err.status === 0) {
      console.error('Seems server is down');
    }
    if (err.status === 401) {
      //this.router.navigate(['/user/sessionexpired']);
      this.router.navigate(['/user/login']);
    }
  }
}
