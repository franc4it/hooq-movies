import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './pages/movies/listing/listing.component';
import { DetailsComponent } from './pages/movies/details/details.component';


const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: ListingComponent},
  {path: 'movies/details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
