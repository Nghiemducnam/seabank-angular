import {Component, Input, OnInit, Output} from '@angular/core';
import {ConfigTable} from '../models/config-table';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  @Input() data: any;
  @Input() configTable: ConfigTable;
  @Input() loading: BehaviorSubject<any>;
  @Output() selectedObject: any;

  constructor() { }

  ngOnInit(): void {
  }



}
