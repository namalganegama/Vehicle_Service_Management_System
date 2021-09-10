import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topnav from './components/layouts/topnav'
import SLMSideNav from './components/layouts/SLMsidenav'
import EMPSideNav from './components/layouts/EMPsidenav'
import AddServices from './components/service-list-manager/service-details/AddserviceDetailsList'
import ViewServices from './components/service-list-manager/service-details/viewServiceDetails'
import ViewOneServices from './components/service-list-manager/service-details/ViewOneService'
import AddEmployee from './components/employee-manager/AddEmployee'
import ViewEmployees from './components/employee-manager/ViewAllEmployees'
import ViewOneEmployee from './components/employee-manager/ViewOneEmployee'
import SendFeedBack from './components/service-list-manager/feedback/sendFeedback'
import ViewFeedback from './components/service-list-manager/feedback/ViewFeedbacks'
import Addattendant from './components/employee-manager/AddAttendant'
import ViewAttendant from './components/employee-manager/ViewAttendants'







function App() {
  return (
    <BrowserRouter>

      <Route path = "/"><Topnav/></Route>


      {/* Service List Manager Routes */}
      <Route path = "/serviceListManager"><SLMSideNav/></Route>
      <Route exact path = "/serviceListManager/add"><AddServices/></Route>
      <Route exact path = "/serviceListManager/view"><ViewServices/></Route>
      <Route exact path = "/serviceListManager/view/:id"><ViewOneServices/></Route>
      <Route exact path = "/serviceListManager/feedback"><SendFeedBack/></Route>
      <Route exact path = "/serviceListManager/feedback/view"><ViewFeedback/></Route>
      

      {/* Employee Manager Routes */}
      <Route path = "/employeeManager"><EMPSideNav/></Route>
      <Route exact path = "/employeeManager/add"><AddEmployee/></Route>
      <Route exact path = "/employeeManager/view"><ViewEmployees/></Route>
      <Route exact path = "/employeeManager/view/:id"><ViewOneEmployee/></Route>
      <Route exact path = "/employeeManager/attendant/add"><Addattendant/></Route>
      <Route exact path = "/employeeManager/attendant/view"><ViewAttendant/></Route>




    </BrowserRouter>
  );
}

export default App;
