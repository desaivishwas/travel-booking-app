import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { ISearchData } from './shared/interfaces/search.data.interface';
import { ISearchResult } from './shared/interfaces/search.result.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults: ISearchResult[];

  constructor(private searchService: SearchService) {
    this.searchResults = [];
  }

  ngOnInit(): void {
    this.searchService.getAFSSearchResult()
      .then(
        (result) => {
          result.subscribe(
            (result) => {
              this.searchResults = result
            })
        });
  }

  loadAllData() {

  }

  executeSearch(searchData: ISearchData) {

    // getAFSSearchResult
    this.searchService.getAFSSearchResult()
      .then(
        (result) => {
          result.subscribe(
            (result) => {
              this.searchResults = result

              var results = this.searchResults.filter(
                (value) => {
                  if (searchData.date > new Date) {
                    return value.to == searchData.destination && value.date.setHours(0, 0, 0, 0) == searchData.date.setHours(0, 0, 0, 0)
                  }
                  else
                    return value.to == searchData.destination
                }
              );

              this.searchResults = results;
            }
          )
        }
      )


  }



}
