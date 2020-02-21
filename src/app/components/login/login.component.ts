import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(
    private toastr: ToastrService, 
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginForm.value)
        .then(() => {
          this.toastr.success('Welcome to our App', 'Success', {
            positionClass: 'toast-bottom-left'
          })
          this.router.navigate(['/'])
        })
        .catch((err) => { 
          this.toastr.error(err.message, 'Error Auth')
         })
  }

}
