
import {CanDeactivate,} from '@angular/router';

import { AddComponent } from '../products/add/add.component';


export class DeactivatedGuard implements CanDeactivate<AddComponent> {
  canDeactivate():boolean {

    return window.confirm("are you sure to navigate from this page");
  }
  
}
