import { Users } from "src/app/user.model";

export class GetUser
{
    static readonly type='[User] GET';
    constructor(public payload:Users){}


}
export class AddUser {
    static readonly type='[User] ADD';
    constructor(public payload:Users){}


}


export class DeleteUser
{
    static readonly type='[User] DELETE';
    constructor(public id:number){}
}
export class UpdateUser{
    static readonly type='[User] UPDATE';
    constructor(public payload:Users){}
}

export class setSelectTodo{
    static readonly type='[User] setSelect';
    constructor(public payload:Users){}
    
}
export class Details{
    static readonly type='[User] Details';
    constructor(public id:number){}
}
