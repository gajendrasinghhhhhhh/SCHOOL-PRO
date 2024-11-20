import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://your-api-url.com/auth/login'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method to send login request
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password }).pipe(
      map((response: any) => {
        // Save the JWT token to localStorage
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Method to logout the user
  logout(): void {
    localStorage.removeItem('token');
  }
}
