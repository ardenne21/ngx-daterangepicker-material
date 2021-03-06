import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'custom-ranges',
  templateUrl: './custom-ranges.component.html',
  styleUrls: ['./custom-ranges.component.scss']
})
export class CustomRangesComponent implements OnInit {
  selected: any;
  alwaysShowCalendars: boolean;
  maxDate: moment.Moment;
  minDate: moment.Moment;
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment()
        .subtract(1, 'month')
        .startOf('month'),
      moment()
        .subtract(1, 'month')
        .endOf('month')
    ]
  };
  constructor() {
    this.maxDate = moment().add('1 weeks');
    this.minDate = moment().subtract(3, 'days');
    this.alwaysShowCalendars = true;
    this.selected = {startDate: moment().subtract(1, 'days'), endDate: moment().subtract(1, 'days')};
  }
  rangeClicked(range) {
    console.log('range is : ', range);
  }

  ngOnInit() {}
}
