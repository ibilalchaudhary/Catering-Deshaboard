import React, { useState, useLocation } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Dashboard from "./Screens/Dashboard";
import Branch from "./Screens/Branch";
import Login from "./Screens/Login";
import Employee from "./Screens/Employee";
import Customer from "./Screens/Customer";
import Catagory from "./Screens/Catagory";
// import Items from "./Screens/Items";
import Plans from "./Screens/Plans";
import Slabs from "./Screens/Slabs";
import Slots from "./Screens/Slots";
import Role from "./Screens/Role";
import Booking from "./Screens/Booking";
import AddRole from "./Screens/AddRole";
import EditRole from "./Screens/EditRole";
import AddSlots from "./Screens/AddSlots";
import EditSlots from "./Screens/EditSlots";
import AddSlabs from "./Screens/AddSlabs";
import EditSlabs from "./Screens/EditSlabs";
import CustomerDetails from "./Screens/CustomerDetails";
import AddBranch from "./Screens/AddBranch";
import EditBranch from "./Screens/EditBranch";
import AddEmployee from "./Screens/AddEmployee";
import AddPlan from "./Screens/AddPlan";
import EditEmployee from "./Screens/EditEmployee";
import EditPlan from "./Screens/EditPlan";
import AddItem from "./Screens/AddItem";
import EditItem from "./Screens/EditItem";
import AddCategory from "./Screens/AddCategory";
import EditCategory from "./Screens/EditCatagory";
import AddSubCategory from "./Screens/AddSubCategory";
import EditSubCategory from "./Screens/EditSubCategory";
import EmployeeDetails from "./Screens/EmployeeDetails";
import BookingDetails from "./Screens/BookingDetails";

const history = createBrowserHistory();
// const location = useLocation();
// const navigate = useNavigate();

function Main({ setIsLogedin, isSmallNav, isLogedin }) {
  return (
    <>
      <NavBar setIsLogedin={setIsLogedin} isSmallNav={isSmallNav} />
      <div className="main" style={isSmallNav ? { maxWidth: "100vw" } : null}>
        <Outlet />
      </div>
      {isSmallNav ? null : (
        <SideBar isLogedin={isLogedin} setIsLogedin={setIsLogedin} />
      )}
    </>
  );
}
function App() {
  const [isLogedin, setIsLogedin] = useState(false);
  const [isSmallNav, setIsSmallNav] = useState(false);
  const [isAddPlanOpen, setIsAddPlanOpen] = useState(false);
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);
  const [isAddCatagoryOpen, setIsAddCatagoryOpen] = useState(false);
  const [isAddSubCatagoryOpen, setIsAddSubCatagoryOpen] = useState(false);
  const [isEditPlanOpen, setIsEditPlanOpen] = useState(false);
  const [isEditItemOpen, setIsEditItemOpen] = useState(false);
  const [isEditCatagoryOpen, setIsEditCatagoryOpen] = useState(false);
  const [isEditSubCatagoryOpen, setIsEditSubCatagoryOpen] = useState(false);

  return (
    <Router history={history}>
      <div className="App">
        {isAddPlanOpen ? <AddPlan closeOnClick={setIsAddPlanOpen} /> : null}
        {isEditPlanOpen ? <EditPlan closeOnClick={setIsEditPlanOpen} /> : null}
        {isAddItemOpen ? <AddItem closeOnClick={setIsAddItemOpen} /> : null}
        {isEditItemOpen ? <EditItem closeOnClick={setIsEditItemOpen} /> : null}
        {isAddCatagoryOpen ? (
          <AddCategory closeOnClick={setIsAddCatagoryOpen} />
        ) : null}
        {isEditCatagoryOpen ? (
          <EditCategory closeOnClick={setIsEditCatagoryOpen} />
        ) : null}
        {isAddSubCatagoryOpen ? (
          <AddSubCategory closeOnClick={setIsAddSubCatagoryOpen} />
        ) : null}
        {isEditSubCatagoryOpen ? (
          <EditSubCategory closeOnClick={setIsEditSubCatagoryOpen} />
        ) : null}

        <Routes>
          <Route path="/" element={<Login setIsLogedin={setIsLogedin} />} />
          <Route
            path="/dashboard"
            element={
              <Main
                isLogedin={isLogedin}
                setIsLogedin={setIsLogedin}
                isSmallNav={isSmallNav}
              />
            }
          >
            <Route
              path=""
              element={<Dashboard setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="branch"
              element={<Branch {...history} setIsSmallNav={setIsSmallNav} />}
              //element={<Branch navigate={navigate} location={location}  setIsSmallNav={setIsSmallNav}/>}
            />
            <Route
              path="add-branch"
              element={<AddBranch {...history} setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="edit-branch"
              element={
                <EditBranch {...history} setIsSmallNav={setIsSmallNav} />
              }
            />
            <Route
              path="booking"
              element={<Booking setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="booking-details"
              element={<BookingDetails setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="employee"
              element={<Employee setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="add-employee"
              element={<AddEmployee setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="edit-employee"
              element={<EditEmployee setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="employee-details"
              element={<EmployeeDetails setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="customer"
              element={<Customer setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="customer-details"
              element={<CustomerDetails setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="category"
              element={
                <Catagory
                  setIsSmallNav={setIsSmallNav}
                  setIsAddCatagoryOpen={setIsAddCatagoryOpen}
                  setIsAddSubCatagoryOpen={setIsAddSubCatagoryOpen}
                  setIsAddItemOpen={setIsAddItemOpen}
                  setIsEditCatagoryOpen={setIsEditCatagoryOpen}
                  setIsEditSubCatagoryOpen={setIsEditSubCatagoryOpen}
                  setIsEditItemOpen={setIsEditItemOpen}
                />
              }
            />
            {/* <Route
              path="items"
              element={<Items setIsSmallNav={setIsSmallNav} />}
            /> */}
            <Route
              path="plans"
              element={
                <Plans
                  setIsSmallNav={setIsSmallNav}
                  setIsAddPlanOpen={setIsAddPlanOpen}
                  setIsEditPlanOpen={setIsEditPlanOpen}
                />
              }
            />
            <Route
              path="role"
              element={<Role setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="add-role"
              element={<AddRole setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="edit-role"
              element={<EditRole setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="slabs"
              element={<Slabs setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="add-slab"
              element={<AddSlabs setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="edit-slab"
              element={<EditSlabs setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="slots"
              element={<Slots setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="add-slot"
              element={<AddSlots setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="edit-slot"
              element={<EditSlots setIsSmallNav={setIsSmallNav} />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
