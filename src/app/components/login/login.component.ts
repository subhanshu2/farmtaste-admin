import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = 'Incorrect Login Details';
  controls     = {
    emailOrPhone: new FormControl(null, [Validators.required]),
    password    : new FormControl(null, [Validators.required])
  };

  form = new FormGroup(this.controls);
  loading: boolean;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {

    if (this.form.invalid) {
      return;
    }

    const data = this.form.value;

    this.userService.login(data)
      .subscribe(res => {
        localStorage.setItem('auth_token', res.token);
        this.router.navigate(['/admin-home']);
      }, error1 => {
        alert(this.errorMessage);
      });
  }

}
