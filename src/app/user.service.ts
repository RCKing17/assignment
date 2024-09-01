import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export interface User {
  id: string;
  username: string;
  email: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/api/users';  // Base URL for your backend API

  constructor(private http: HttpClient) { }

  // Get all users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError<User[]>('getAllUsers', []))
      );
  }

  // Get a user by ID
  getUserById(id: string): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }

  // Create a new user
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user)
      .pipe(
        catchError(this.handleError<User>('addUser'))
      );
  }

  // Update an existing user
  updateUser(user: User): Observable<any> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.put(url, user)
      .pipe(
        catchError(this.handleError<any>('updateUser'))
      );
  }

  // Delete a user
  deleteUser(id: string): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<User>(url)
      .pipe(
        catchError(this.handleError<User>('deleteUser'))
      );
  }

  // Handle HTTP operation that failed.
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
