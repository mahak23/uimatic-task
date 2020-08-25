import { Component, OnInit } from "@angular/core";
import { CrudService } from "../crud.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  students = [];
  constructor(public crudService: CrudService, private router: Router) {}

  // To add student record
  addStudent(): void {
    this.router.navigate(["crud/create"]);
  }
  // To delete student record
  deleteStudent(studentId) {
    this.crudService.deleteStudent(studentId).subscribe(
      (data) => {
        if (confirm("sure to delete")) {
          this.getAllStudentRecords();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // To edit student record
  editStudent(studentId): void {
    this.router.navigate(["crud/update/" + studentId]);
  }

  getAllStudentRecords() {
    this.crudService.getAll().subscribe((data) => {
      this.students = data;
    });
  }
  ngOnInit() {
    // To dfetch all students record
    this.getAllStudentRecords();
  }
}
