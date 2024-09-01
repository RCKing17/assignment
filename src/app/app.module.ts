import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app.module';  // Importing the AppRoutingModule
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import {NgIf} from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: DashboardComponent},

  { path: 'user-management', component: UserManagementComponent},

  { path: 'group-management', component: GroupManagementComponent},

  { path: 'chat', component: ChatComponent},

  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  declarations: [
    
    LoginComponent,
    DashboardComponent,
    UserManagementComponent,
    GroupManagementComponent,
    ChatComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    // AppRoutingModule,  // Importing AppRoutingModule here
    HttpClientModule,
    NgIf   
  ],
  providers: [
  ],
  bootstrap: []
})
export class AppModule { }
// export { AppRoutingModule };

