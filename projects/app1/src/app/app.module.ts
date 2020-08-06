import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { CoreAppModule } from './app.module-core-app';

// const routes: Routes = [
//   { path: '', component: FirstComponent },
//   { path: 'home', component: HomeComponent }
// ];

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('./app.module-core-app').then(m => m.CoreAppModule)
  },
  {
    path: '',
    redirectTo: '/app1',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreAppModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
