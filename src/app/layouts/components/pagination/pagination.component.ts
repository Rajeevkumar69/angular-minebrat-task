import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {




  }


  @Input() page = 1;
  @Input() perPage = 5;
  @Output() pageChange = new EventEmitter<number>();

  next() { this.pageChange.emit(this.page + 1); }
  prev() { if (this.page > 1) this.pageChange.emit(this.page - 1); }

}
