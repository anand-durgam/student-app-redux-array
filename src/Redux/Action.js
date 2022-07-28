export const SET_STUDENT_DATA ='SET_STUDENT_DATA';

export const setStudentData = studentData => dispatch => {
    dispatch({
        type: SET_STUDENT_DATA,
        payload: studentData,
    })
}