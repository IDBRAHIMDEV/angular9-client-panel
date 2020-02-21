import { Client } from './../../models/client';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]),
    lastName: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(3)]),
    balance: new FormControl(0, Validators.required)
  })

  id: string = '';

  constructor(
       private router: Router,
       private route: ActivatedRoute, 
       private clientService: ClientService
       ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.clientService.getOne(params.id).subscribe(response => this.clientForm.patchValue(response));
    });
  }


  updateClient() {
    
    let myData: Client = {
      ...this.clientForm.value,
      id: this.id
    }

    this.clientService.update(myData)
        .then(() => this.router.navigate(['/clients']))
        .catch(err => console.log(err))
  }

}
