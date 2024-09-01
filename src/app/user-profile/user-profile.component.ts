import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any = {};

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  updateProfile() {
    this.userService.updateUser(this.user).subscribe(
      updatedUser => {
        alert('Profile updated successfully');
        this.authService.setUser(updatedUser); // Update user in AuthService
      },
      error => {
        alert('Failed to update profile');
      }
    );
  }
  
}
