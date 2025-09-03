import { createSlice } from "@reduxjs/toolkit";

const initialCards=[
    {id:1, text:"Card A"},
    {id:2, text:"Card B"},
    {id:3, text:"Card C"}
]

const CardSlice=createSlice({
    name: "cards",
    initialState:{
        available: initialCards,
        drop:[]
    },

    reducers:{
        movetomain: (state,action)=>{
            const cardid=action.payload;
            const card=state.available.find((val)=>val.id===cardid);
            if(!card) return;
            state.available=state.available.filter((val)=>val.id!==cardid);
            state.drop.push(card);
        },

        movetoside: (state,action)=>{
            const cardid=action.payload;
            const card=state.drop.find((val)=>val.id===cardid);
            if(!card) return;
            state.drop=state.drop.filter((val)=>val.id!==cardid);
            state.available.push(card);
        }
    }
})

export const {movetomain, movetoside} = CardSlice.actions;
export default CardSlice.reducer;