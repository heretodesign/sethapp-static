import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ContactsProps, jobApplicationProps } from '../interface/'
import { AdminNav } from '../components/Header/AdminNav'
// import { ListApplications } from './JobApplications';

const Dashboard = () => {
    const [contacts, setContacts] = React.useState<ContactsProps[]>([]);
    const [jobApp, setJobApp] = React.useState<jobApplicationProps[]>([{
        "fullname": "tirelo nkeleee",
        "email": "tirelomadre@gmail.com",
        "phonenumber": 6014223939,
        "location": "Botswana, Mochudi",
        "profile": "http://localhost:7000/api/v1/eeeeeeeeeeeee/",
        "motivation": "Government efforts to save the planet have neglected the fishes that live in the ocean, moreover the shallow waters of the ocean have been over fished for the last century in the efforts to meet the increasing demand for fish consumption and this is predicated to lead to large-scale fish extinction. ",
        "startdate": "Monday 29 June 2021",
        // "resume": "sdsdsdresume.pdfsdsdsd",
    }]);
    const [size, setSize] = React.useState<number>(20);
    const [page, setPage] = React.useState<number>(1);
    const [currPage, setCurrPage] = React.useState<number | any>(null);


    React.useEffect(() => {
        getContactList()
    }, [])

    const getContactList = () => {
        const BASE_URL = 'http://localhost:7000/api/v1/contacts'
        axios.get(BASE_URL)
            .then(response => {
                console.log('CONTACT SUCCESS', response);
                const { data } = response
                const x: any = JSON.stringify(data);
                //debugger
                setContacts(data)
            })
    }

    React.useEffect(() => {
        getJobApplicationList()
    }, [])

    const getJobApplicationList = () => {
        const BASE_URL = 'http://localhost:7000/api/v1/applications'
        axios.get(BASE_URL)
            .then(response => {
                console.log('CONTACT SUCCESS', response);
                const { data } = response
                const x: any = JSON.stringify(data);
                debugger
                setJobApp(data)
            })
    }

    // const handleDelete = (contactId: string, e: any) => {
    //     alert('DELETE MAIL')
    //     // const BASE_URL = `http://localhost:7000/api/v1/contacts/${_id}`
    //     axios.delete(`http://localhost:7000/api/v1/contacts/${_id}`)
    //     .then(response => {
    //         debugger
    //         console.log('CONTACT MAIL DELETED SUCCESSFULLY', response);
    //         if (response !== null) {
    //             const newContacts = contacts.filter(contact => contact._id !== contactId);  
    //             setContacts(newContacts)
    //         }
 
    //     })
    // }

    return (
        <React.Fragment>
          <AdminNav />
            <section className="columns is-fullheight is-paddingless-horizontal">
                <Aside className="column box is-2 is-narrow-mobile">
                    <p className="menu-label is-hidden-touch">Header</p>
                    <ul className="menu-list">
                        <li>
                            <a href="#go-first" className="is-active">CIT</a>
                            <ul><li><a href="#">Items</a></li><li><a href="#">Items</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="is-active">Other</a>
                            <ul>
                                <li><a href="#">other</a></li>
                            </ul>
                        </li>
                    </ul>
                </Aside>
                <div className="container grid is-large notification column is-10">
                    <div className="firstsection">
                      <HeaderTitle className="title has-text-centered is-3">Contact Us Email List Table</HeaderTitle>
                      {/* <h3 className="title is-6">Page: {page} && Size: {size}</h3> */}
                        <div className="content">
                          <div className="columns">
                            <div className="column" id="tablelisttask">
                              <table className="table is-mobile">
                                <THead>
                                  <tr>
                                   {/* <th><abbr title="id" className="is-3">id</abbr></th> */}
                                    <th><abbr title="id" className="is-3">FullName</abbr></th>
                                    <th><abbr title="task">Phone Number</abbr></th>
                                    <th><abbr title="completed">Email</abbr></th>
                                    <th><abbr title="completed">Message</abbr></th>
                                    <th><abbr title="action">Action</abbr></th>
                                  </tr>
                                </THead>
                                {contacts &&
                                  <tbody>
                                    {
                                      contacts.map(({_id, fullname, phonenumber, email, message}) => (
                                        <tr className="is-5" key={_id}>
                                          {/* <td className="is-6">{ _id }</td> */}
                                          <td className="is-6">{ fullname }</td>
                                          <td className="is-5">{ phonenumber }</td>
                                          <td className="is-5">{ email }</td>
                                          <td className="is-5">{ message }</td>
                                          <td className="is-5">
                                            <Link to={`/pages/viewpage/${_id}`}>
                                              <button className="button is-info has-background-black-bis">View Mail</button>
                                            </Link>
                                          </td>
                                          <td><button type="button" className="button is-danger">Delete</button></td>
                                          {/* <td><button onClick={(e) => handleDelete(_id, e)} type="button" className="button is-danger">Delete</button></td> */}
                                        </tr>
                                      ))
                                    }
                                  </tbody>
                                }
                              </table>
                              {/* <div className="columns">
                                <div className="column is-2 has-text-centered">
                                  <button
                                    onClick={this.previousPage}
                                    className="button is-info">
                                    Previous Page
                                  </button>
                                </div>
                                <div className="column is-1">
                                  <button
                                    onClick={this.nextPage}
                                    className="button is-info">
                                    Next Page
                                  </button>
                                </div>
                              </div> */}
                             </div>
                          </div>
                        </div>
                     </div>
                </div>
            </section>
            {/* <ListContacts key={contact._id} contact={contact} />
            <ListApplications key={jobApp._id} jobApp={jobApp} /> */}
        </React.Fragment>
    )
}

const LinkBtn = styled(Link)`
  color: #003468;
  background: white;

  @include tablet {
    font-size: 1.2rem;
    margin-top: 1px;
    background: #fba502;
  }
	@media (max-width: 768px) { 
		width: 450px; 
		padding: 10px;
	}

  @include phone {
    font-size: 1rem;
    margin-top: 1px;
  }

  // &:hover {
  //   background-color: #003468;
  //   color: white;
  // }
`
const THead = styled.thead`
  background: #003468;
  color: white;
`
const Button = styled.p`
    background: #003468;
    color: white;
    margin-top: 20px;
`
const TextPara = styled.p`
  font-size: 1.2rem;
  color: #003468;
`
const HeaderTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 0px;
  color: #fff;
`
const Aside = styled.aside`
    font-size: 1rem;
    font-weight: 300;
    // margin-top: 0px;
    color: #fff;
    background: #003468;

    position: sticky;
    display: inline-block;
    vertical-align: top;
    max-height: 100vh;
    overflow-y: auto;
    width: 200px;
    top: 0;
    bottom: 0;
    padding: 30px;
`
export default Dashboard;
