import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux'
import './ShowStudent.css'

const ShowStudent = () => {

  const {studentData} = useSelector(state => state.elsplReducer)
  console.log(studentData)

    return(
      <>
        <Table className='student-details-table' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                            <td>Nikhil</td>
                            <td>14-07-2000</td>
                            <td>9123456789</td>
                            <td>Karimnagar</td>
                            <td>Male</td>
                            
                      </tr>
                      <tr>
                            <td>Varun</td>
                            <td>14-07-2000</td>
                            <td>9123456789</td>
                            <td>Adilabad</td>
                            <td>Male</td>
                            
                      </tr>
                      <tr>
                            <td>Swathi</td>
                            <td>14-07-2000</td>
                            <td>9123456789</td>
                            <td>Hyderabad</td>
                            <td>Female</td>
                            
                      </tr>
                      {/* {studentData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))} */}
                </tbody>
            </Table>
      </>
    )
  };
  
  export default ShowStudent;
  