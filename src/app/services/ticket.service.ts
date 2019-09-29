import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './ticketinterface';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient
  ) { }

  getOpenTickets(): Observable<Map<string, object>> {
    return this.http.get<Map<string, object>>('http://localhost:8080/tickets/open');
  }
}
