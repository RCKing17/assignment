import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface User {
  id: string;
  username: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('/api/auth/login', { username, password });
  }

  setUser(user: any): void {
    this.user = user;
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }

  logout(): void {
    this.user = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
  }

  isAuthenticated(): boolean {
    return typeof window !== 'undefined' && !!localStorage.getItem('user');
  }

  getUser(): any {
    if (!this.user && typeof window !== 'undefined') {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');
    }
    return this.user;
  }

  hasRole(role: string): boolean {
    const user = this.getUser();
    return !!user && user.roles.includes(role);
  }
  
}
