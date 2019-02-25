import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cycleeva-details-warning',
  templateUrl: './cycleeva-details-warning.component.html',
  styleUrls: ['./cycleeva-details-warning.component.scss']
})
export class CycleevaDetailsWarningComponent implements OnInit {
@Input() info;
  constructor() { }

  ngOnInit() {
  }

}
