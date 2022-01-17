import {React,Component} from 'react';

class App extends Component{

  constructor(){
    super();
    this.state={
      
      employeeData:[],
      act:0,
      index:''
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    let employeeData=this.state.employeeData;
    let FirstName=this.refs.txtFirstName.value;
    let LastName=this.refs.txtLastName.value;
    let CompanyName=this.refs.txtCompanyName.value;



    let newEmployee={
      "Firstname":FirstName,
      "LastName":LastName,
      "CompanyName":CompanyName
    }

    employeeData.push(newEmployee);
    this.setState({
      employeeData:employeeData
    })


    
    if(this.state.act===0)
    {
      let newEmployee=
      {
        "FirstName":FirstName,
        "LastName":LastName,
        "CompanyName":CompanyName
      }

    }
    else
    {
      let index=this.state.index;
      employeeData[index].FirstName=FirstName;
      employeeData[index].LastName=LastName;
      employeeData[index].CompanyName=CompanyName;

    }

    this.setState({
      employeeData:employeeData,
      act:0
    })

  
  }

  
handleEdit=(i)=>{
 let employeeData=this.state.employeeData[i];
 this.refs.txtFirstName.value=employeeData.Firstname;
 this.refs.txtLastName.value=employeeData.LastName;
 this.refs.txtCompanyName.value=employeeData.CompanyName;

 this.setState({
   employeeData:employeeData,
   act:1,
   index:1
 })
}

handleDelete=(i)=>{
  let employeeData=this.state.employeeData;
  employeeData.splice(i,1);
  this.setState({
    employeeData:employeeData
  });
}



  render(){
    let employeeData=this.state.employeeData;

    return(

      <div>
      
      <form ref="myform" className="myForm">
       
        <label>First Name</label>
        <input type="text" ref="txtFirstName" placeholder="Enter first name"/>

        <label>Last Name</label>
        <input type="text" ref="txtLastName" placeholder="Enter last name"/>

        <label>Company Name</label>
        <input type="text" ref="txtCompanyName" placeholder="Enter Company name"/>

        <button onClick=
        {e=>this.handleSubmit(e)}>
          SUBMIT
          </button>

      </form>

      <table>
        <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Company Name</th>
          <th>Action</th>
        </tr>
        {
          employeeData.map((data,i)=>
          <tr key={i}>
              <td>{data.FirstName}</td>
              <td>{data.LastName}</td>
              <td>{data.CompanyName}</td>
              
              <td>
                <button onClick={this.handleEdit=(i)}>Edit</button>
              </td>
              <td>
                <button onClick={this.handleDelete=(i)}>Delete</button>
              </td>
          </tr>

          )
        }
        </tbody>
      </table>
      
      
      </div>
    )
  }
}

export default App;