import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/stroe/state/user.state';
import { Users } from 'src/app/user.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor() { }
  newData: any
  @Select(UserState.getdatails) detail$: Observable<Users>
  ngOnInit(): void {
    this.detail$.subscribe(res => {
      console.log("datails console", res)
      this.newData = res
    })


  }

}
