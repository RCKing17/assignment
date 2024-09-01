import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { GroupManagementComponent } from './group-management/group-management.component';
import { ChatComponent } from './chat/chat.component';


import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  
    { path: 'login', component: LoginComponent },

    { path: 'dashboard', component: DashboardComponent},

    { path: 'user-management', component: UserManagementComponent},

    { path: 'group-management', component: GroupManagementComponent},

    { path: 'chat', component: ChatComponent},

    { path: '**', redirectTo: '/dashboard' }
];
