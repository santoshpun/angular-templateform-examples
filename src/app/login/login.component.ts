import { Component, OnInit } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  countries: Country[] = [
    new Country(1, 'Nepal'),
    new Country(2, 'USA'),
    new Country(3, 'Canada'),
    new Country(4, 'Australia')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(loginForm): void {
    console.log(loginForm.value);
  }

}
