export const users = (state=[{ id: 1, name: 'Ali' }], action) =>{// it is not just adding item, it is all about the list of itmes.
    switch(action.type){
        case"ADD_USER":
        return [...state, {id:action.id, name: action.name}]

        default:
            return state;

    }    
}

// export default addItem