
import "./adminSidebar.scss"

// animation library 
import { motion } from "framer-motion";

// @material-ui/core components
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CloseIcon from '@mui/icons-material/Close';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

import { Link } from 'react-router-dom';

// contexts
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DarkModeContext } from "../../context/darkModeContext";


const AdminSidebar = ({ setOpen }) => {

    // Dispatch for Dark Mode Toggle and dispatch for logout functionality
    const { Dispatch } = useContext(DarkModeContext);
    const { dispatch } = useContext(AuthContext)

    // function to handle logout
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
    }

    return (
        <div className='navSidebarContainer'>
            <motion.div animate={{ width: "200px" }} className="sidebar">
                <ul>

                    <li id='menu'>
                        <h2 >ADMIN MENU</h2>
                        {/* Close button */}
                        <CloseIcon className='icon' onClick={() => setOpen(false)} />
                    </li>

                    {/* Options under Main which is Dashboard only */}

                    <p className="title">Main</p>
                    <Link to="/admin" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    {/* Options under Lists */}

                    <p className="title">Information</p>

                    {/* Takes you to list of all registered students */}
                    <Link to="/admin/students" style={{ textDecoration: "none" }}>
                        <li>
                            <GroupIcon className="icon" />
                            <span>Students</span>
                        </li>
                    </Link>

                    {/* Takes you to list of all registered faculty */}
                    <Link to="/admin/faculties" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Faculties</span>
                        </li>
                    </Link>

                    {/* Takes you to list of all updates created by admin */}
                    <Link to="/admin/updates" style={{ textDecoration: "none" }}>
                        <li>
                            <NotificationsIcon className="icon" />
                            <span>Updates</span>
                        </li>
                    </Link>

                    {/* Takes you to list of all events created by teams */}
                    <Link to="/admin/events" style={{ textDecoration: "none" }}>
                        <li>
                            <EventIcon className="icon" />
                            <span>Events</span>
                        </li>
                    </Link>

                    {/* Takes you to list of all courses created by admin */}
                    <Link to="/admin/courses" style={{ textDecoration: "none" }}>
                        <li>
                            <CollectionsBookmarkIcon className="icon" />
                            <span>Courses</span>
                        </li>
                    </Link>

                    {/* Takes you to list of all classes created by admin */}
                    <Link to="/admin/classes" style={{ textDecoration: "none" }}>
                        <li>
                            <SchoolIcon className="icon" />
                            <span>Classes</span>
                        </li>
                    </Link>

                    {/* Options under User which is only Logout for now */}

                    <p className="title">User</p>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span onClick={handleClick}>Logout</span>
                    </li>

                    {/* Toggle for Theme */}

                    <p className="title">Theme</p>
                    
                    <div className="theme">
                        <div
                            className="colorOption"
                            onClick={() => Dispatch({ type: "LIGHT" })}
                        ></div>
                        <div
                            className="colorOption"
                            onClick={() => Dispatch({ type: "DARK" })}
                        ></div>
                    </div>
                </ul>
            </motion.div >


        </div >
    )
}

export default AdminSidebar