import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  onSignup(form: NgForm) {
    this.router.navigate(['/signup']);
    const email = form.value.email;
    const password = form.value.password;
  }
  constructor( private router: Router)// injected router
   { }

  ngOnInit() {
  }

}
