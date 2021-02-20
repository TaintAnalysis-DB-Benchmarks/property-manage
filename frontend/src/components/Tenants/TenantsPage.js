import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {format} from 'date-fns'
import {getAllTenants} from '../../store/tenants'
import {getAllProperties} from '../../store/properties'
import TenantsForm from './TenantsForm'
import '../Table/Table.css'
import TableComponent from "../Table/Table";
// import './SignupForm.css';

function TenantsPage() {
  // if (!sessionUser) return <Redirect to="/" />;
  const dispatch = useDispatch();
 
  const sessionUser = useSelector((state) => state.session.user);
  const sessionTenants = useSelector(state => state.tenants.tenants)
  const sessionProps = useSelector(state => state.userProperties.properties)
  
  const [tenants, setTenants] = useState()
  const [tenant, setCurrentTenant] = useState()
  const [newApplicant,setNewApplicant] = useState(false)
  const [data,setData]= useState([])
  const [showTenant, setShowTenant] = useState(false)

//   if (!sessionUser) return <Redirect to="/" />;
  


  useEffect(()=>{
    const getTenants = async(id)=>{
      let tenants = await dispatch(getAllTenants(id))
    
  
      setTenants(tenants.data)
      setData(tenants.data.tenants)
      await dispatch(getAllProperties(id))
    } 
    if (sessionUser) {
      getTenants(sessionUser.id)
    }
    
  },[])

  useEffect(()=>{
    if (sessionTenants.tenants) {
      
      setData(sessionTenants.tenants)
    }
  },[sessionTenants])

  // if (!sessionUser) return <Redirect to="/" />;
  const findCurrentTenant = tennant => {
    if (tennant !== '0') {
      let current =sessionTenants.tenants.find(prop => prop.id==tennant)
      setCurrentTenant(current)
     
      setShowTenant(true)
  
    } else {
      setCurrentTenant(null)
    }
  }

  const showApplicantForm = () => {
    setNewApplicant(!newApplicant)
   
  }

  const getPropertyName = (id) => {
      // const prop = sessionProps.find({id:id})
      const prop = sessionProps.properties.find(prop => prop.id == id)
      return prop.propertyName
  }

  const showAllTenants = () => {
    setNewApplicant(null)
    setShowTenant(false)
  }

  const columns = React.useMemo(
    () => [
      {
        
        Header: 'First Name',
        accessor: 'firstName', // accessor is the "key" in the data
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Phone #',
        accessor: 'phoneNumber',
      },
      {
        id:'active',
        Header: 'Status',
        accessor: d=> d.active != true ? 'Waiting' : 'Active'
      },
      {
        id:'createdAt',
        Header: 'Application Date',
        accessor: 'createdAt',
        Cell: ({value}) => {return format(new Date(value),'MM/dd/yyyy')}
      },
      
    ],
    []
  )

  if (!sessionUser) return <Redirect to="/" />;
  return (
    <>
    <div>
      <div className='flex-between'>

        <h1>Applicants and Tenants</h1>
        {newApplicant || showTenant &&
            <button className='form-button' onClick={showAllTenants}>All Tenants</button>
          }
        <button className='form-button' onClick={showApplicantForm}>New Applicant</button>
      </div>
      {newApplicant &&
      
      <div>
          <TenantsForm cancelTenant={()=>setNewApplicant(false)}/>
        </div>
      }
      {!newApplicant &&
      <div>
    
     <div>
       {showTenant &&
      <div>
        <h2>Tenant Details</h2>
        <p>First Name: {tenant.firstName}</p>
        <p>Last Name: {tenant.lastName}</p>
        <p>Phone: {tenant.phoneNumber}</p>
        <p>Status: {tenant.active !== true ? 'Waitlist' : 'Active'}</p>
        {tenant.active == true && 
        <>
        <p>Unit #: {tenant.unitNumber}</p>
        <p>{getPropertyName(tenant.propertyId)}</p>
        </>
      }
      </div>
      }
      {!newApplicant && !showTenant &&
      
      <TableComponent data={data} columns={columns} onClickCallback={(e)=> findCurrentTenant(e)} />
      }
     
     </div>
  
    </div>
}
    </div>
    </>
  );
}

export default TenantsPage;