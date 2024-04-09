import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JourneysComponent } from './journeys/journeys.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'journeys', component: JourneysComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
