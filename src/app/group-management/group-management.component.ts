// import { Component, OnInit } from '@angular/core';
// import { GroupService } from '../group.service';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-group-management',
//   templateUrl: './group-management.component.html',
//   styleUrls: ['./group-management.component.css']
// })
// export class GroupManagementComponent implements OnInit {

//   groups: any[] = [];
//   filteredGroups: any[] = [];
//   searchTerm: string = '';
//   userGroups: any[] = [];

//   constructor(private groupService: GroupService, private authService: AuthService) { }

//   ngOnInit(): void {
//     this.loadGroups();
//     this.loadUserGroups();
//   }

//   loadGroups() {
//     this.groupService.getAllGroups().subscribe(data => {
//       this.groups = data;
//       this.filteredGroups = data;
//     });
//   }

//   loadUserGroups() {
//     const user = this.authService.getUser();
//     this.userGroups = this.groups.filter(group => group.members.includes(user.id));
//   }

//   joinGroup(groupId: number) {
//     const userId = this.authService.getUser().id;
//     this.groupService.addUserToGroup(groupId, userId).subscribe(() => {
//       this.loadUserGroups();
//     });
//   }

//   leaveGroup(groupId: number) {
//     const userId = this.authService.getUser().id;
//     this.groupService.removeUserFromGroup(groupId, userId).subscribe(() => {
//       this.loadUserGroups();
//     });
//   }
  
//   searchGroups() {
//     if (this.searchTerm) {
//       this.filteredGroups = this.groups.filter(group =>
//         group.groupName.toLowerCase().includes(this.searchTerm.toLowerCase())
//       );
//     } else {
//       this.filteredGroups = this.groups;
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.css']
})
export class GroupManagementComponent implements OnInit {
  groupName: string = '';
  groups: Array<{ id: number, name: string }> = [];

  constructor() { }

  ngOnInit(): void {
    this.loadGroups();
  }

  createGroup(): void {
    const newGroup = { id: this.groups.length + 1, name: this.groupName };
    this.groups.push(newGroup);
    this.groupName = '';
  }

  loadGroups(): void {
    // Logic to load groups from server
  }

  deleteGroup(groupId: number): void {
    this.groups = this.groups.filter(group => group.id !== groupId);
  }
}
