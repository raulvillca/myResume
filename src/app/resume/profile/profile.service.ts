import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl : String = "https://next.json-generator.com/api";
  constructor(private http: HttpClient) { }

  getEducations() {
    return this.http.get(`${this.apiUrl}/json/get/EkLt9LNL8`);
  }

  getExperiences(): Observable<any> {
    return this.http.get(`${this.apiUrl}/json/get/N1XjcDrIU`);
  }

  getSkills(): Observable<any> {
    return this.http.get(`${this.apiUrl}/json/get/NJZG1UEL8`);
  }

  getInformation(): Observable<any> {
    return this.http.get(`${this.apiUrl}/json/get/EyBwrL4LU`);
  }

  contactus(data: any): Observable<any> {
    return this.http.post("" + 'contact', data);
  }
}
