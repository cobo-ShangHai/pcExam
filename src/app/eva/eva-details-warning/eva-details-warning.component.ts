import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-eva-details-warning',
  templateUrl: './eva-details-warning.component.html',
  styleUrls: ['./eva-details-warning.component.scss']
})
export class EvaDetailsWarningComponent implements OnInit {
  @Input() info;
  constructor() { }

  ngOnInit() {
  }


}
