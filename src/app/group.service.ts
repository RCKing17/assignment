import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseUrl = '/api/groups';

  constructor(private http: HttpClient) { }

  getAllGroups(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addUserToGroup(groupId: number, userId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${groupId}/addUser`, { userId });
  }

  removeUserFromGroup(groupId: number, userId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${groupId}/removeUser`, { userId });
  }
}
