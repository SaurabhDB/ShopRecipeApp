import { SignupComponent } from './Auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)
    ] ,
    exports: [RouterModule]
})

export class AppRouting {}