import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule, provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { SkeletonModule } from "./skeleton/skeleton.module";
import { HomeModule } from "./home/home.module";
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkeletonModule,
    HomeModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
