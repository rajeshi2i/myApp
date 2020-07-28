import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'sub-app/home', component: HomeComponent },
  { path: 'sub-app/profile', component: ProfileComponent },
  { path: 'sub-app', redirectTo: 'sub-app/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
