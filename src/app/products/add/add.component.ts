
import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AddUser, UpdateUser, } from 'src/app/stroe/actions/user.action';
import { UserState } from 'src/app/stroe/state/user.state';
import { Users } from 'src/app/user.model';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit,OnDestroy {
  name: string;
  price: number;
  id: number;
  onupdate = false;
  disable=false;
  disbaleup=true;
  basit = {};
  subscription:Subscription;
  constructor(private store: Store, private router: Router) {
   }
  @Select(UserState.getseleted) selected$: Observable<Users[]>;
  
  ngOnInit(): void {
    this.disable=false;
   this.subscription=this.selected$.subscribe((resp) => {
      this.basit = resp
      if (this.basit) {
        this.id = this.basit['id'],
          this.name = this.basit['name'],
          this.price = this.basit['price']
          this.disable=true;
          this.disbaleup=false;
        console.log('the value after submiting', this.id)
        console.log('the value after submiting', this.name),
          console.log('the value after submiting', this.price)
    
    
      }
      
     
    })
  }
  
  onaddvalue() {
    

    this.store.dispatch(new AddUser({ id: this.id, name: this.name, price: this.price }))

    this.router.navigate(['products/view']);
  }
  updatevalue() {
    
    
    this.store.dispatch(new UpdateUser({ id: this.id, name: this.name, price: this.price }))
    //  this.basit=null;
    //  this.disable=false;
      console.log('dibleee',this.disable);
    this.router.navigate(['products/view']);
    
  }
  backtoview() {
    // this.disable=false;
    this.router.navigate(['products/view'])
  }
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}

