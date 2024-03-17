
import Dashboard from "views/Dashboard.js";
import Chambres from "views/Chambres.js";
import Students from "views/Students.js";
import Courses from "views/Courses.js";
import Attendance from "views/Attendance.js";
import Classroom from "views/Classroom.js";
import Administration from "views/Administration.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import Exam from "views/Exam.js";
import LoginAdmin from "views/LoginAdmin.js";
import LoginUser from "views/LoginUser.js";
import Finance from "views/Finance";
import LasterActivity from "views/LasterActivity";
import Schoolinformation from "views/Schoolinformation.js";
import Paiement  from "views/Paiement";
import Transaction  from "views/Transaction";
import Bulletin  from "views/Bulletin";

var dashRoutes = [


  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
 
  {
    path: "/paiement",
    name: "Paiement",
    icon: "business_briefcase-24",
    component: Paiement,
    layout: "/admin",
  },

  {
    path: "/transaction",
    name: "Transaction",
    icon: "design_app",
    component: Transaction,
    layout: "/admin",
  },
  {
    path: "/chambres",
    name: "Chambres",
    icon: "business_badge",
    component: Chambres,
    layout: "/admin",
  },
  {
    path: "/students",
    name: "students",
    icon: "business_briefcase-24",
    component: Students,
    layout: "/admin",
  },

  {
    path: "/classroom",
    name: "classroom",
    icon: "files_paper",
    component: Classroom,
    layout: "/admin",
  },

  {
    path: "/bulletin",
    name: "Bulletin",
    icon: "files_paper",
    component: Bulletin,
    layout: "/admin",
  },

  {
    path: "/courses",
    name: "courses",
    icon: "design-2_ruler-pencil",
    component: Courses,
    layout: "/admin",
  },

  {
    path: "/finance",
    name: "Finance",
    icon: "design-2_ruler-pencil",
    component: Finance,
    layout: "/admin",
  },

  {
    path: "/attendance",
    name: "Attendance",
    icon: "design-2_ruler-pencil",
    component: Attendance,
    layout: "/admin",
  },
  

  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },

  {
    path: "/lasterActivity",
    name: "Laster Activity",
    icon: "design-2_ruler-pencil",
    component: LasterActivity,
    layout: "/admin",
  },

  {
    path: "/loginUser",
    component: LoginUser,
    
  },
  
  
  /*{
    pro: true,
    path: "/loginUser",
    name: "Deconnexion",
    icon: "objects_spaceship",
    component: LoginUser,
    layout: "/admin",
  },*/
];
export default dashRoutes;
