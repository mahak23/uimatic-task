import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { CrudModule } from "./crud/crud.module";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CrudModule,
    AppRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
