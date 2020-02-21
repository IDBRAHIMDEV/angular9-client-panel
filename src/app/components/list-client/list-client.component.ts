import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAllClient()
  }

  getAllClient() {
    this.clientService.getAll().subscribe((response: Client[]) => {
      this.clients = response
      console.log(response)
    });
  }

  destroyClient(id: string) {
    
    if(!confirm('Are you sure to delete this item ?')) {
      return;
    }

    this.clientService.delete(id)
        .then(() => console.log('deleted'))
        .catch((err) => console.log(err))
  }

}
