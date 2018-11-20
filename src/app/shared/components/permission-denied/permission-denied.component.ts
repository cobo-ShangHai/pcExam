import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-permission-denied',
  templateUrl: './permission-denied.component.html',
  styleUrls: ['./permission-denied.component.scss']
})
export class PermissionDeniedComponent implements OnInit {
@Input() deniedInfo;
  constructor() { }

  ngOnInit() {
  }

}
