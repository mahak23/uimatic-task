import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./crud/list/list.component";

import { CreateComponent } from "./crud/create/create.component";
import { UpdateComponent } from "./crud/update/update.component";

const routes: Routes = [
  { path: "crud/home", component: ListComponent },

  { path: "crud/create", component: CreateComponent },
  { path: "crud/update/:studentId", component: UpdateComponent },
  { path: "**", redirectTo: "crud/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
