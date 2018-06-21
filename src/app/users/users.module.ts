import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UsersComponent} from './users.component';
import {UsersService} from '../services/users/users.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
	FormsModule
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  providers: [UsersService]
})
export class UsersModule { }
