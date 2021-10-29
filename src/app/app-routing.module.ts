import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginpasswordComponent } from './Components/loginpassword/loginpassword.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { TakeNotesComponent } from './Components/take-notes/take-notes.component';
import { TrashComponent } from './Components/trash/trash.component';
import{AuthenticationGuard} from './Components/Authguard/authentication.guard' 
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotemailComponent },
  { path: 'password', component: LoginpasswordComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  { path: 'icons', component: IconsComponent },


  {path:'dashboard',component:DashboardComponent, canActivate:[AuthenticationGuard],
    children:[
      { path: '', redirectTo: 'getnotes', pathMatch: 'full' },
      {path:'getnotes',component:GetNotesComponent},
      {path:'trash',component:TrashComponent},
      {path:'archive',component:ArchivenotesComponent}
    ]
},

 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
