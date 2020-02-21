import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  currentUser = null;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userAuthenticated()
        .subscribe(user => {
          this.currentUser = user;
        })
  }

}
