import {Component, OnInit} from '@angular/core';
import {ConfigTable} from '../../shared/models/config-table';
// @ts-ignore
import bankData from '../../shared/data.json';
import {Transaction} from '../../shared/models/transaction';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-use-table',
  templateUrl: './use-table.component.html',
  styleUrls: ['./use-table.component.css']
})
export class UseTableComponent implements OnInit {
  data: Transaction = bankData;
  isLoading: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  configTable: ConfigTable = {
    nameObjectDetail: 'nameObjectDetail',
    nameTable: 'passbookOnline',
    properties: [
      {
        name: {en: 'transactionCode'},
      },
      {
        name: {en: 'customerId'},
      },
      {
        name: {en: 'identityCode'},
      },
      {
        name: {en: 'typeIdentity'},
      },
      {
        name: {en: 'typeCustomer'},
      },
      {
        name: {en: 'transactionType'},
      },
      {
        name: {en: 'status'},
      },
      {
        name: {en: 'inputUser'},
      },
      {
        name: {en: 'approve'},
      },

    ],
    isScroll: '215px',
    numericalOrder: true
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
