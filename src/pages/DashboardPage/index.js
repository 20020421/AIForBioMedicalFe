import classNames from "classnames/bind";
import { Route, Routes } from "react-router-dom";
import Analytics from "../../components/Analytics";
import BoneXRay from "../../components/BoneXRay";
import LungXRay from "../../components/LungXray";
import style from './DashboardPage.module.scss';
import SideBar from "./SideBar";

const cx = classNames.bind(style);


function DashboardPage() {
    return ( <div className={cx('wrapper')}>
        <SideBar />
        <div className={cx('main')}>
            <Routes>
                <Route path="/" element={<Analytics />} />

                <Route path="/lung" element={<LungXRay />} />
                <Route path="/bone" element={<BoneXRay />} />

            </Routes>
        </div>
    </div> );
}

export default DashboardPage;