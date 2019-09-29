import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../services/ticketinterface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-opentickets',
  templateUrl: './opentickets.component.html',
  styleUrls: ['./opentickets.component.css']
})
export class OpenticketsComponent implements OnInit {

  responseObject: Map<string, object>;

  tickets: object[];
  tags: [];

  constructor(
    private ticketService: TicketService,

  ) {

  }

  ngOnInit() {
    this.ticketService.getOpenTickets().subscribe(res => {
      console.log(res);
      this.responseObject = res;
      this.extractData(this.responseObject);


    });
  }

  extractData(responseObject: Map<string, object>) {
    for (const key of Object.keys(responseObject)) {
      if (key === 'result') {
        this.tickets = responseObject[key];
      }

    }

  }

}
