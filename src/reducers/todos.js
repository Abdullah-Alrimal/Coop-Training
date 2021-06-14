// import { AsyncStorage } from "react-native";

export const todos = (state=[], action) =>{// it is not just adding item, it is all about the list of itmes.
    switch(action.type){
        case"ADD_ITEM": {
            const updatedState = [...state, {...action.payload}]
            // AsyncStorage.setItem('todos', JSON.stringify(updatedState))
            return updatedState;//
        }
        case "DELETE_ITEM":{
            return state.filter((item) => {
                return item.id !== action.payload.id
            });
        }
        default:
            return state;

    }    
}

// export default addItem