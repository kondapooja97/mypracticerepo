import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharonlyDirective } from '../directives/charonly.directive';
import { CurrencyPipe } from '../pipes/currency.pipe';
import { SearchPipe } from '../pipes/search.pipe';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    CharonlyDirective,
    CurrencyPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    CharonlyDirective,
    CurrencyPipe,
    SearchPipe,
    HttpClientModule
  ]
})
export class SharedModule { }
