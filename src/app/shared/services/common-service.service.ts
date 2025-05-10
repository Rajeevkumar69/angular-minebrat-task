import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUser(username: any) {
    return this.http.get(`${this.apiUrl}/${username}`);
  }

  getRepos(username: any, page: number, perPage: number) {
    return this.http.get(`${this.apiUrl}/${username}/repos?page=${page}&per_page=${perPage}`);
  }
}
