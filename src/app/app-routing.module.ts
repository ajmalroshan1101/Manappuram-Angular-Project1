import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  
  {
    path:'',
    component:LoginpageComponent
  },
  {
    path:'shared',
    loadChildren: () => import('./modules/shared/shared.module').then((m) => m.SharedModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
