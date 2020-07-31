import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  envVar = environment.testEnv;

  constructor(
    private router: Router
  ) {}

  navigateToApp1() {
    this.router.navigateByUrl('app1');
  }

}
