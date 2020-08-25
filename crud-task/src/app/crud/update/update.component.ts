import { Component, OnInit, Inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudService } from "../crud.service";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"],
})
export class UpdateComponent implements OnInit {
  studentData = {};
  courseList = ["MCA", "BCA", "BBA", "MBA"];
  gender;
  id;
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public CrudService: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      age: ["", Validators.required],
      gender: ["", Validators.required],
      course: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.studentId;
      this.CrudService.getStudentById(this.id).subscribe((data) => {
        this.studentData = data;
        this.gender = data.gender;
        this.registerForm.patchValue({
          name: data.name,
          age: data.age,
          gender: data.gender,
          course: data.course,
        });
      });
    });
  }

  onSubmit() {
    for (const formKey of Object.keys(this.registerForm.controls)) {
      this.registerForm.controls[formKey].markAsTouched();
    }
    if (this.registerForm.invalid) {
      return;
    }
    let data = this.registerForm.value;
    data.id = this.id;

    this.CrudService.updateStudent(data).subscribe(
      (data) => {
        this.router.navigate(["crud/home"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
