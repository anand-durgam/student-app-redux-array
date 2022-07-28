import "./AddStudent.css";
import { useDispatch } from 'react-redux'
import { setStudentData } from "../../Redux/Action";
import { useSelector } from 'react-redux'


const AddStudent = () => {

  const {studentData} = useSelector(state => state.elsplReducer)
  console.log(studentData)

  const dispatch = useDispatch();

  let studentName = "";
  let studentDateOfBirth;
  let studentNumber;
  let studentAddress = "";
  let studentGender;

  const onChangeName = (e) => {
    studentName = e.target.value;
  };

  const onChangeDate = (e) => {
    studentDateOfBirth = e.target.value;
  };

  const onChangeNumber = (e) => {
    const enteredValue = e.target.value
    if (isNaN(enteredValue) === false) {
      studentNumber = e.target.value;
    } else {
      window.alert("Please Enter a Valid 10 Digit Phone Number");
    }
    studentNumber = e.target.value;
  };

  const onChangeAddress = (e) => {
    studentAddress = e.target.value;
  };

  const onChangeGender = (e) => {
    studentGender = e.target.value;
  };

  const onSubmit = (e) => {
    e.preventDefault();

   const studentDetails = {
      name: studentName,
      dateOfBirth: studentDateOfBirth,
      number: studentNumber,
      address: studentAddress,
      gender: studentGender
    };

    dispatch(setStudentData(studentDetails))
    // dispatch(setStudentData("English"))
    
    e.target.reset();
    
  };

  return (
    <div className="form-container">
      <h1>Enter Student Details</h1>
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          required
          type="text"
          name="name"
          placeholder="Student Name"
          onChange={onChangeName}
        />
        <input
          className="input"
          required
          type="date"
          name="date"
          onChange={onChangeDate}
        />
        <input
          className="input"
          type="tel"
          required
          maxLength="10"
          minLength="10"
          name="number"
          placeholder="Phone Number"
          onChange={onChangeNumber}
        />
        <textarea
          className="input"
          cols="10"
          rows="5"
          required
          type="text"
          name="address"
          placeholder="Student Address"
          onChange={onChangeAddress}
        />

        <div className="input">
          <input
            className="gender"
            type="radio"
            name="gender"
            value="male"
            onChange={onChangeGender}
          />
          <label className="gender" htmlFor="gender">
            {" "}
            Male
          </label>
          <input
            className="gender"
            type="radio"
            name="gender"
            value="female"
            onChange={onChangeGender}
          />
          <label className="gender" htmlFor="gender">
            {" "}
            Female
          </label>
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
