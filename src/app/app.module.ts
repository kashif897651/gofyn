import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListviewComponent } from './listview/listview.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
