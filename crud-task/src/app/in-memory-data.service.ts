import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 11, name: "Dr Nice", age: 20, gender: "male", course: "mca" },
      { id: 12, name: "Narco", age: 20, gender: "male", course: "mca" },
      { id: 13, name: "Bombasto", age: 20, gender: "male", course: "mca" },
      { id: 14, name: "Celeritas", age: 20, gender: "male", course: "mca" },
      { id: 15, name: "Magneta", age: 20, gender: "male", course: "mca" },
    ];
    return { students };
  }
  genId(students) {
    return students.length > 0
      ? Math.max(...students.map((hero) => hero.id)) + 1
      : 11;
  }
}
