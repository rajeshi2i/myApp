import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'projects/app1/src/environments/environment';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  envVar = environment.testEnv;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    //
  }

  backToCoreApp() {
    this.router.navigateByUrl('/tabs/tab1');
    console.log('===============');
  }

  gotoHome() {
    this.router.navigateByUrl('/app1/home');
  }

}
