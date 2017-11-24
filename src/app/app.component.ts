import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { FormGroup, FormControl, Validators } from '@angular/forms'
// import { Validators } from '@angular/forms/src/validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form;
  ngOnInit () {

    this.form = new  FormGroup({
      firstname : new FormControl('', 
      Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
      lastname : new FormControl('', this.textValidator),
      languages : new FormControl('')
    })
  }

  textValidator(control){
    if(control.value.length < 3){
      return {'lastname': true}
    }
  }
  
  


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
