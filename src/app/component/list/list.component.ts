import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-share-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() list;
  @Input() type;
  @Input() columns;
  @Input() trigger;
  @Input() selected = [];
  @Output() selectionEvt = new EventEmitter();

  previous;
  dataSource = new MatTableDataSource([]);
  displayedColumns;
  selection = new SelectionModel<any>(true, []);

  constructor() {
  }

  ngOnInit() {
    this.previous = this.list;
    this.initList();
    this.selectionTrack();


  }


  initList() {
    this.displayedColumns = this.columns.map(c => c.columnDef);
    // this.displayedColumns.splice(0, 0, 'select');
    this.dataSource = new MatTableDataSource(this.list);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnChanges() {
    if (this.dataSource) {
      this.dataSource.data = this.list;
    }
    this.initList();
  }

  selectionTrack() {
    this.selection.changed.subscribe(
      (test) => {
        this.selectionEvt.emit(this.selection.selected)
      }
    )
  }



}
