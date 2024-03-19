import { Navigate, Route, Routes } from 'react-router-dom';
import {lazy} from "react"
import LazySuspense from "./components/LazySuspense"
const LazyLogin=lazy(()=> import("./pages/auth/Login"))
const LazyMain=lazy(()=> import("./pages/user/Main"))
const LazyHome=lazy(()=> import("./pages/user/Home"))
const LazyBooknow=lazy(()=> import("./pages/user/Booknow"))
const LazyService=lazy(()=> import("./pages/user/Service"))
const LazyAbout=lazy(()=> import("./pages/user/About"))
const LazyConnectwithus=lazy(()=> import("./pages/user/Connectwithus"))
const LazyProfilepage=lazy(()=> import("./pages/user/Profilepage"))
const LazyForgetpassword=lazy(()=> import("./pages/auth/Forgetpassword"))
const LazyRegister=lazy(()=> import("./pages/auth/Register"))



const UserRoutes = () => {
  return (
    <LazyMain>
      <Routes>
        <Route path="/home" element={<LazySuspense component={LazyHome} />} />
        <Route path="/booknow" element={<LazySuspense component={LazyBooknow} />} />
        <Route path="/profilepage" element={<LazySuspense component={LazyProfilepage} />} />
        <Route path="/service" element={<LazySuspense component={LazyService} />} />
        <Route path="/connectwithus" element={<LazySuspense component={LazyConnectwithus} />} />
        <Route path="/about" element={<LazySuspense component={LazyAbout} />} />
        
      </Routes>
    </LazyMain>
  );
};

const AdminRoutes = () => {
  return (
    <LazyAdminMain>
      <Routes>
        <Route path="/dashboard" element={<LazySuspense component={LazyDashboard} />} />
      </Routes>
    </LazyAdminMain>
  );
};
 

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/project/login"/>} />
        <Route path="/project/login" element={<LazySuspense component={LazyLogin} />} />
        <Route path="/project/register" element={<LazySuspense component={LazyRegister} />} />
        <Route path="/project/forgetpassword" element={<LazySuspense component={LazyForgetpassword} />} />
        <Route path="/project/user*" element={<LazySuspense component={UserRoutes} />} />
        <Route path="/project/admin*" element={<LazySuspense component={AdminRoutes} />} />
    
    </Routes>
  );
}

export default App;