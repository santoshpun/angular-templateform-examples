import { Component, OnInit } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'app-loginvalidation',
  templateUrl: './loginvalidation.component.html',
  styleUrls: ['./loginvalidation.component.css']
})
export class LoginvalidationComponent implements OnInit {

  countries: Country[] = [
    new Country(1, 'Nepal'),
    new Country(2, 'USA'),
    new Country(3, 'Canada'),
    new Country(4, 'Australia')
  ];

  user = {
    username: '',
    password: '',
    countryId: 1
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(loginForm): void {
    console.log(loginForm.value);
  }

}
