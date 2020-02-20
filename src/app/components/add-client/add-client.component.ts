import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {


  clientForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]),
    lastName: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(3)]),
    balance: new FormControl(0, Validators.required)
  })

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  persistClient() {
    this.clientService.save(this.clientForm.value)
        .then(response => this.router.navigateByUrl("/clients"))
        .catch(error => console.error(error))
  }

}
