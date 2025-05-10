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

  @Input() public page = 1;
  @Input() public perPage = 5;
  @Output() public pageChange = new EventEmitter<number>();

  public next() {
    this.pageChange.emit(this.page + 1);
  }

  public prev() {
    if (this.page > 1) {
      this.pageChange.emit(this.page - 1);
    }
  }

}
