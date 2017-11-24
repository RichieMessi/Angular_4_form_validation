import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { ProductComponent } from './product/product.component';
import { SortPipe } from './app.sort'


@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    MembersComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
