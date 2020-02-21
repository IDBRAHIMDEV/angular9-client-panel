import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser = null;
  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.authService.userAuthenticated()
        .subscribe(user => this.currentUser = user)
  }

  logout() {
    this.authService.logout()
        .then(() => {
            this.toastr.warning('User disconnect SuccessFully', 'Disconnect')
            this.router.navigateByUrl('/login')
        })
        .catch(err =>  this.toastr.error(err.message, 'Disconnect'))
  }

}
