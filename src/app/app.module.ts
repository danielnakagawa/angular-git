import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {UsersService} from './services/users/users.service';
import {UsersModule} from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    FormsModule,
      UsersModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
