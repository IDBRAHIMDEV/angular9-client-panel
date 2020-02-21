import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private toastr: ToastrService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  createAccount() {
    this.authService.register(this.registerForm.value)
        .then(() => {
            this.toastr.success('Welcome to our App', 'Success', {
              positionClass: 'toast-bottom-left'
            }) 
            this.router.navigate(['/']) 
        })
        .catch((err) => { 
            this.toastr.error(err.message, 'Error User', {
              positionClass: 'toast-bottom-left'
            })
        })
  }

}
