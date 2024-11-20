import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TeacherDetComponent } from './teacher-det/teacher-det.component';
import { StdDetailsComponent } from './std-details/std-details.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent},
  {path: '', redirectTo: 'header', pathMatch: 'full'},
  {path: 'teacher-det', component: TeacherDetComponent},
  {path: 'std-details', component: StdDetailsComponent},
  {path: 'contactus', component: ContactusComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
