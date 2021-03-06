import { LoginComponent } from '../app/login/login.component';
import { WorkoutProgramListComponent } from '../app/workoutprogramlist/workoutprogramlist.component';
import { WorkoutprogramComponent } from '../app/workoutprogramlist/workoutprogram/workoutprogram.component';
import { NotfoundComponent } from '../app/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../app/register/register.component';
import { AuthGuard } from '../app/guards/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'workoutprogram', component: WorkoutProgramListComponent },
  { path: 'workoutprogram/:id', component: WorkoutprogramComponent },
  { path: '', redirectTo: '/workoutprogram', pathMatch: 'full' },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
