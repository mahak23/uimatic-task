import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  private baseUrl = "api/students";

  constructor(private http: HttpClient) {}

  /**
   * Fetch the list of students
   */
  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  /**
   * Add the student
   * @param student
   */
  addStudent(student): Observable<any> {
    return this.http.post<any>(this.baseUrl, student);
  }

  /**
   * Get the student by ID
   * @param id
   */
  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/" + id);
  }

  /**
   * Update Student by ID
   * @param student
   */
  updateStudent(student): Observable<any> {
    return this.http.put<any>(this.baseUrl + "/" + student.id, student);
  }

  /**
   * Delete student by ID
   * @param id
   */
  deleteStudent(id) {
    return this.http.delete<any>(this.baseUrl + "/" + id);
  }
}
