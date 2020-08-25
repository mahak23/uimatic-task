import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudService } from "../crud.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
})
export class CreateComponent implements OnInit {
  registerForm: FormGroup;
  courseList = ["MCA", "BCA", "BBA", "MBA"];
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    public crudService: CrudService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      age: ["", Validators.required],
      gender: ["", [Validators.required]],
      course: ["", [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get fetchFeilds() {
    return this.registerForm.controls;
  }

  onSubmit() {
    for (const formKey of Object.keys(this.registerForm.controls)) {
      this.registerForm.controls[formKey].markAsTouched();
    }

    if (this.registerForm.invalid) {
      return;
    }

    this.crudService.addStudent(this.registerForm.value).subscribe((data) => {
      this.router.navigate(["crud/home"]);
    });
  }

  ngOnInit() {}
}
