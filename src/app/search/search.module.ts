import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    SearchComponent,
    SearchInputComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatAutocompleteModule,
    MatTableModule,

    SharedModulesModule
  ]
})
export class SearchModule { }
