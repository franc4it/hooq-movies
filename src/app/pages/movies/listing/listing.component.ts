import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  movieRows = [];
  displayedRows = [];
  movieTypes = [];
  isFullListDisplayed = false;
  pageNumber;
  pageSize;
  pagination: any;
  constructor(
    private movieService: MovieService,
    private formBuilder: FormBuilder
  ) { }

  selectMovieTypeForm = this.formBuilder.group({
    movieType: ['Multi-Title-Manual-Curation']
  });
  ngOnInit() {
    this.pageNumber = 1;
    this.pageSize = 20;
    this.getMovieListing(this.pageNumber, this.pageSize, this.selectMovieTypeForm.value.movieType);
  }

  onSelectChanged(event) {
    this.pageNumber = 1;
    this.displayedRows = [];
    this.getMovieListing(this.pageNumber, this.pageSize, this.selectMovieTypeForm.value.movieType);
  }
  onScroll(){
    let totalItemsShown = this.pageNumber * this.pageSize;
    if(totalItemsShown < this.pagination.totalCount){
      this.pageNumber++;
      this.getMovieListing(this.pageNumber, this.pageSize, this.selectMovieTypeForm.value.movieType)
    }  
    else{
      this.isFullListDisplayed = true;
    }  
    // console.log("Scrolled")
  }
  distinct = (value, index, self) => {
    return self.indexOf(value)===index;
  };
  getMovieListing(pageNumber, pageSize, type?) {
    // console.log(this.pageNumber, this.pageSize);
    this.movieService.getMovieListing(pageNumber, pageSize)
      .subscribe(result => {
        this.pagination = result.pagination;
        this.movieRows = result.data;
        this.movieTypes.push(...result.data.map(r => r.type));
        this.movieTypes = this.movieTypes.filter(this.distinct)
        if (type) {
          this.displayedRows.push(...result.data.filter(r => r.type === type));
        }
        else {
          this.displayedRows.push(...result.data);
        }
        // console.log(this.displayedRows);
        // console.log("Pagination: ", this.pagination);
      })
  }
  // goToDetails(movieId){
  //   console.log("ID: ", movieId);
  // }
}
