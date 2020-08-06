import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './first/first.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'home', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent
  ],
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class SubAppModule { }

