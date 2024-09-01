// import { Component, OnInit } from '@angular/core';
// import { UserService, User } from '../user.service';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-user-management',
//   templateUrl: './user-management.component.html',
//   styleUrls: ['./user-management.component.css']
// })
// export class UserManagementComponent implements OnInit {

//   users: User[] = [];
//   filteredUsers: any[] = [];
//   searchTerm: string = '';
//   currentUser: any;
//   errorMessage: string = '';

//   constructor(private userService: UserService, private authService: AuthService) { }

//   ngOnInit(): void {
//     this.loadUsers();
//     this.currentUser = this.authService.getUser();
//   }

//   loadUsers() {
//     this.userService.getAllUsers().subscribe(
//       data => {
//         this.users = data;
//         this.filteredUsers = data;
//       },
//       error => {
//         this.errorMessage = error;
//       }
//     );
//   }

//   searchUsers() {
//     if (this.searchTerm) {
//       this.filteredUsers = this.users.filter(user =>
//         user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
//       );
//     } else {
//       this.filteredUsers = this.users;
//     }
//   }

//   changeRole(user: any, role: string) {
//     user.roles = [role];
//     this.userService.updateUser(user).subscribe(
//       updatedUser => {
//         alert('User role updated successfully');
//         this.loadUsers();
//       },
//       error => {
//         this.errorMessage = error;
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: Array<{ id: number, username: string, roles: string[] }> = [];
  selectedUser: { id: number, username: string, roles: string[] } | null = null;

  constructor() { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // Logic to load users from server
  }

  editUser(user: any): void {
    this.selectedUser = { ...user };
  }

  saveUser(): void {
    // Logic to save the user
    this.selectedUser = null;
  }
}
