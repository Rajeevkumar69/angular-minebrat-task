import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    LayoutsComponent,
    MainComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LayoutsModule { }
