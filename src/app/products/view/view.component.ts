import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeleteUser, Details, setSelectTodo, } from 'src/app/stroe/actions/user.action';
import { UserState } from 'src/app/stroe/state/user.state';
import { Users } from 'src/app/user.model';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private router: Router, private store: Store) { }
  @Select(UserState.getuserdatalist)
  user$: Observable<Users[]>
  ngOnInit(): void {
  }
  onadd() {
    this.router.navigate(['products/add'])
  }
  onupdate(item) {
    console.log("view component Item", item);
    this.store.dispatch(new setSelectTodo(item))
    this.router.navigate([`products/add`, item])
  }
  onremove(id: number) {
    console.log(id);
    this.store.dispatch(new DeleteUser(id))
  }
  ondeatils(id) {
    this.store.dispatch(new Details(id))
    this.router.navigate(['products/details', id])
  }


}
