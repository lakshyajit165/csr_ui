import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ChartsModule } from 'ng2-charts';

import { MaterialModule } from './material/material.module';
import { OpenticketsComponent } from './opentickets/opentickets.component';
import { HttpClientModule } from '@angular/common/http';
import { PerformanceComponent } from './performance/performance.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TicketdetailcardComponent } from './ticketdetailcard/ticketdetailcard.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OpenticketsComponent,
    PerformanceComponent,
    TicketdetailsComponent,
    TicketdetailcardComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
