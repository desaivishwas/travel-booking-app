import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { IDestinationGroup } from '../../shared/interfaces/destination.group.interface';
import { IDestination } from '../../shared/interfaces/destination.interface';
import { ISearchData } from '../../shared/interfaces/search.data.interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Output() searchData: EventEmitter<ISearchData>;

  _filter = (opt: string[], value: string): string[] => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().includes(filterValue));
  }

  searchForm: FormGroup;

  destinationGroupOptions: Observable<IDestinationGroup[]>;
  destinations: IDestination[];
  destinationGroups: IDestinationGroup[];
  destinationVal: string;

  dateSelected: Date;

  searchButtonText: string = "Search";

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder
  ) {
    this.searchData = new EventEmitter<ISearchData>();
    this.searchForm = this.formBuilder.group(
      {
        searchDestination: ["", [Validators.required]],
        searchDate: ["", []]
      }
    )

    this.destinationVal = "";
    this.destinations = []
    this.destinationGroups = [];
    
    this.searchService.getDestinations()
      .then(
        (result) => {
          result.subscribe(
            (result) => {
              this.destinations = result
              
              this.getDestinationGroups(this.destinations);
            }
          )
        }
      )


    this.dateSelected = new Date;
  }

  ngOnInit(): void {
    this.initDestGroupOptions();
  }

  get searchItems() { return this.searchForm.controls; }


  //#region Destination Group
  private initDestGroupOptions() {
    this.destinationGroupOptions = this.searchForm.get('searchDestination')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value)),
      );
  }

  private getDestinationGroups(destinations: IDestination[]) {
    destinations.forEach(
      (dest) => {
        let destHead = this.destinationGroups.find(res => {
          return res.destinationHead == dest.destinationGroup
        })
        if (!destHead) {
          this.destinationGroups.push({
            destinationHead: dest.destinationGroup,
            destinationItems: [dest.destination]
          })
        }
        else {
          destHead.destinationItems.push(dest.destination)
        }
      }
    )
  }

  private _filterGroup(value: string): IDestinationGroup[] {
    if (value) {
      return this.destinationGroups
        .map(group => ({
          destinationHead: group.destinationHead,
          destinationItems: this._filter(group.destinationItems, value)
        }))
        .filter(group => group.destinationItems.length > 0)
    }

    return this.destinationGroups;
  }
  //#endregion Destination Group

  searchClick() {
    let destination = this.searchItems["searchDestination"].value;
    let date = this.searchItems["searchDate"].value;

    this.searchData.emit({
      destination: destination,
      date: date
    })
  }

}
