import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Users } from "src/app/user.model";
import { AddUser, DeleteUser, Details, setSelectTodo, UpdateUser } from "../actions/user.action";

// state model
export class UserStateModel {
    user: Users[] = [];
    setselected: Users;
    details: Users;

}

// state decorator
@State<UserStateModel>({
    name: 'Userstate',
    defaults: {
        user: [],
        setselected: null,
        details: null,
    }

})

@Injectable()
export class UserState {
    // selector for add data show in html form
    @Selector()
    static getuserdatalist(state: UserStateModel) {
        return state.user;
    }
    // slector foe update 
    @Selector()
    static getseleted(state: UserStateModel) {
        return state.setselected;
    }
    // for deatils show 
    @Selector()
    static getdatails(state: UserStateModel) {
        return state.details
    }



    // add data to state
    @Action(AddUser)
    adduserdata({ getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
        console.log(payload)

        const statevalue = getState();


        patchState(
            {
                user: [...statevalue.user, payload]



            }
        )





    }
    // delet data to state
    @Action(DeleteUser)
    deletuserdate({ getState, setState }: StateContext<UserStateModel>, { id }: DeleteUser) {
        const state = getState();
        console.log("before state", state.user);
        const filterdata = state.user.filter(use => use.id !== id);
        console.log(id)
        console.log('after save', filterdata)
        setState(
            {
                ...state,
                user: filterdata
            }
        )
    }
    // update data of state
    @Action(UpdateUser)
    updatedataofuser({ getState, patchState }: StateContext<UserStateModel>, { payload }: UpdateUser) {
        console.log("the update payload", payload)

        const state = getState();
        const userlist = state.user;
        const index = userlist.findIndex(ind => ind.id === payload.id)
        console.log("user index", index);
        console.log("user list", userlist[index]);

        userlist[index] = payload;
        patchState(
            {
                user: userlist,
            }
        )

        // patchState({
        //     setselected: null
        // })

    }

    @Action(setSelectTodo)
    setSelectTo({ getState, setState }: StateContext<UserStateModel>, { payload }: setSelectTodo) {
        console.log(payload)
        const state = getState();
        console.log("the setselectto data", state)
        setState({
            ...state,
            setselected: payload
        });

    }
    @Action(Details)
    setdeatails({ getState, setState }: StateContext<UserStateModel>, { id }: Details) {
        console.log("for deatls", id);
        const state = getState();
        const detl = state.user;
        const detls = detl.find(ind => ind.id === id)
        console.log("details state", state)
        setState(

            {
                ...state,
                details: detls
            }
        )

    }


}