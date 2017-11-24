import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';

  name = 'Richie'

  day = new Date(1992, 3, 15)

  arr = [3, 4, 5, 6, 9, 0]

  foo(e){
    console.warn('works')
    e.preventDefault()
  }

  onSubmit = function(x){
    console.warn(x)
  }





}
