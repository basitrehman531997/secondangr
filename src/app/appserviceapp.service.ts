import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AppserviceappService {
 
    public service=[
        {
          id:1,
          name:"atal",
          price:344,
        },
        {
          id:2,
          name:"subhan",
          price:666,
        },
        {
          id:5,
          name:"Afaq",
          price:78,
        }
      ];
  constructor() { }

  add(val:any)
  {
    this.service.push(val);
    
  }


 findval(id:any)
 {
  return this.service.find((item)=>item.id==id )
 } 


 removevalues(id:number)
 {
   this.service.forEach((val,ind)=>{
if(val.id===id)
{
 this.service.splice(ind,1)

}
   })

 }
 details(id:number)
 {
  //  console.log("details id",id)
   return this.service.find(item =>item.id==id)
  
 }
 update(id:any,name:any,price:any)
 {
   this.service.find(item=>{
     if(item.id===id)
     {
      item.name=name;
      item.price=price;
     }
   })
 }
}
