import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../services/userService/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };
  login(loginform) {
    let reqData = {
      email: loginform.email,
      password: loginform.password,
    };
    console.log(reqData);
    this.userService.loginUser(reqData).subscribe((res) => {
      console.log(' register success full ', res);
      localStorage.setItem('token', res['id']);
      this.router.navigate(['dashboard']);
    });
  }
  register() {
    this.router.navigate(['']);
  }
}
