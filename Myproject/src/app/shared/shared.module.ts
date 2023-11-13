import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharonlyDirective } from '../directives/charonly.directive';
import { CurrencyPipe } from '../pipes/currency.pipe';
import { SearchPipe } from '../pipes/search.pipe';




@NgModule({
  declarations: [
    CharonlyDirective,
    CurrencyPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    CharonlyDirective,
    CurrencyPipe,
    SearchPipe
  ]
})
export class SharedModule { }
