import {Component, Input, OnInit, Output} from '@angular/core';
import {ConfigTable, Property} from '../models/config-table';
import {BehaviorSubject} from 'rxjs';
import {Transaction} from '../models/transaction';

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
  listData: Transaction [] = [];
  isIncrease = true;

  constructor() { }

  ngOnInit(): void {
    // this.listData = [...this.data];
    this.sortBy('', true);
  }

  sortBy(key: any, isIncrease: boolean): any {
    debugger
    this.isIncrease = !this.isIncrease;
    // console.log(this.isIncrease);
    const dataBank = [...this.data];
    // const dataBank = Object.assign({}, this.data);
    // console.log('data >>>>>>>>>::', this.data);
    // console.log('dataBank >>>>>>>>>::', dataBank);
    if (dataBank){
      this.listData = dataBank.filter(i => {
        switch (key){
          case 'transactionCode':
            return i.transactionCode === key;
          case 'customerId':
            return i.customerId === key;
          case 'identityCode':
            return i.identityCode === key;
          case 'typeIdentity':
            return i.typeIdentity === key;
          case 'typeCustomer':
            return i.typeCustomer === key;
          case 'transactionType':
            return i.transactionType === key;
          case 'status':
            return i.status === key;
          case 'inputUser':
            return i.inputUser === key;
          case 'approve':
            return i.approve === key;
          default:
            return dataBank;
        }
      }).reverse();
      console.log(this.listData);
    }else { return; }
  }
}
