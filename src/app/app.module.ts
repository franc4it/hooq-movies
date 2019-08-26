import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './pages/movies/listing/listing.component';
import { DetailsComponent } from './pages/movies/details/details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
