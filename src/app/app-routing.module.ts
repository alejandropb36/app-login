import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'profile' },
  { path: 'profile', pathMatch: 'full',  component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
