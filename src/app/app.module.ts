import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule} from "@angular/material/toolbar";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatIconModule} from "@angular/material/icon";
import { MatCardModule} from "@angular/material/card";
import { MainTextComponent } from './main-text/main-text.component';
import { MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    MainTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
