import {SET_STUDENT_DATA} from './Action'

const initialState ={
    studentData : [],
}



const elsplReducer = (state = initialState, action) => {
    
        switch (action.type) {
            case SET_STUDENT_DATA:
                return {...state , studentData: [...state.studentData, action.payload]}
            default:
                return state;
        }
}

export default elsplReducer;