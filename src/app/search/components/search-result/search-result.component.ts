import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ISearchResult } from '../../shared/interfaces/search.result.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SearchResultComponent implements OnInit {

  //  @Input() searchResults: ISearchResult[] = [];

  @Input() set searchResults(value: ISearchResult[]) {
    this.searchResultsStatic = value;
    this.searchResultsDisplay = value;
  }

  proceedButtonText: string = "Proceed"

  searchResultsDisplay: ISearchResult[] = [];
  searchResultsStatic: ISearchResult[] = [];

  displayedColumns: string[];
  dataSource = new MatTableDataSource(this.searchResultsDisplay)
  expandedElement: ISearchResult | null;

  constructor(
    private router: Router
  ) {
    this.displayedColumns = ["from", "to", "date", "price", "vehicletype", "duration", "seatcount"]//, "seattype"]
    //this.dataSource = new MatTableDataSource(this.searchResults)
  }

  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.searchResultsStatic)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.searchResultsDisplay = this.dataSource.filteredData;
  }

  proceedClick(resultId: string) {
    this.router.navigate(["/booking"], { queryParams: { journeyid: resultId } })
  }

}
