import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AddFund from './Components/Admin panel/AddFund';
import AddMember from './Components/Admin panel/AddMember';
import AllUser from './Components/Admin panel/AllUser';
import DashBoard from './Components/Admin panel/DashBoard';
import HostDetail from './Components/Admin panel/HostDetail';
import JoinMember from './Components/Admin panel/JoinMember';
import MenuBar from './Components/Admin panel/MenuBar';
import PendingFund from './Components/Admin panel/PendingFund';
import UserDetail from './Components/Admin panel/UserDetail';
import AllHost from './Components/Admin panel/AllHost';
import RunningFund from './Components/Admin panel/RunningFund';
import ViewFundDetails from './Components/Admin panel/ViewFundDetails';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import LogInPage from './Components/LogInPage';
import RegisterAHost from './Components/RegisterAHost';
import Profile from './Components/Profile';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import HowToPlay from './Components/HowToPlay';
import AllFundMember from './Components/Admin panel/AllFundMember';
import CompleteFund from './Components/Admin panel/CompleteFund';
import ViewCompleteFundDetails from './Components/Admin panel/ViewCompleteFundDetails';
import UserMenuBar from './Components/User panel/UserMenuBar';
import UserDashBoard from './Components/User panel/UserDashBoard';
import UserTotalFund from './Components/User panel/UserTotalFund';
import UserCompleteFund from './Components/User panel/UserCompleteFund';
import UserCompleteFundDetails from './Components/User panel/UserCompleteFundDetails';
import UserRunningFund from './Components/User panel/UserRunningFund';
import UserPendingFund from './Components/User panel/UserPendingFund';
import ChangePassword from './Components/ChangePassword';
import Notification from './Components/User panel/Notification';
import Help from './Components/User panel/Help';
import AdminNotification from './Components/Admin panel/AdminNotification';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="register" element={<RegisterAHost />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="how-to-play" element={<HowToPlay />} />
        </Route>

        <Route path="/userPenal" element={<UserMenuBar />}>
          <Route index element={<UserDashBoard />} />
          <Route path="dashboard" element={<UserDashBoard />} />
          <Route path="totalFund" element={<UserTotalFund />} />
          <Route path="completeFund" element={<UserCompleteFund />} />
          <Route
            path="ViewCompleteFundDetails"
            element={<UserCompleteFundDetails />}
          />
          <Route path="runningFund" element={<UserRunningFund />} />
          <Route path="pendingFund" element={<UserPendingFund />} />
          <Route path="allFund" element={<UserTotalFund />} />
          <Route path="profile" element={<Profile />} />
          <Route path="passwordChange" element={<ChangePassword />} />
          <Route path="Notification" element={<Notification />} />
          <Route path="help" element={<Help />} />
        </Route>

        <Route path="/admin" element={<MenuBar />}>
          <Route index element={<DashBoard />} />
          <Route index path="dashboard" element={<DashBoard />} />
          <Route path="host" element={<HostDetail />} />
          <Route path="addFund" element={<AddFund />} />
          <Route path="addMember" element={<AddMember />} />
          <Route path="allUsers" element={<AllUser />} />
          <Route path="allHost" element={<AllHost />} />
          <Route path="user" element={<UserDetail />} />
          <Route path="pending" element={<PendingFund />} />
          <Route path="joinMember" element={<JoinMember />} />
          <Route path="runningFund" element={<RunningFund />} />
          <Route path="FundMember" element={<AllFundMember />} />
          <Route path="completeFund" element={<CompleteFund />} />
          <Route
            path="ViewCompleteFundDetails"
            element={<ViewCompleteFundDetails />}
          />
          <Route path="viewFundDetails" element={<ViewFundDetails />} />
          <Route path="notification" element={<AdminNotification />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
