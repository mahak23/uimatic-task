import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ListComponent } from "./list/list.component";

import { CreateComponent } from "./create/create.component";
import { UpdateComponent } from "./update/update.component";

@NgModule({
  declarations: [ListComponent, CreateComponent, UpdateComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
})
export class CrudModule {}
