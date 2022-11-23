import { faAngleDown, faChartSimple, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from '../DashboardPage.module.scss';

const cx = classNames.bind(style);


const sidebars = [
    {
        id: 1,
        title: 'Analytics',
        icon: faChartSimple,
        to: '/'
    },
    {
        id: 2,
        title: 'Diagnostics',
        icon: faStethoscope,
        to: '/lung',
        sub: [
            {
                id: 3,
                title: 'Chest X-ray',
                to:'/lung',
            },
            {
                id: 4,
                title: 'Bone X-ray',
                to:'/bone',
            }
        ]
    }
]


function SideBar() {
    return ( <div className={cx('sidebar-wrapper')}>
        <div className={cx('container')}>
            <div className={cx('header')}>
                <span>Menu</span>
            </div>
            <div className={cx('sidebar-items')}>
                {
                    sidebars.map((item, index) => (
                        <SideBarItem data={item} key={index} />
                    ))
                }
            </div>
        </div> 
    </div> );
}

function SideBarItem({data}) {
    return (
        <div className={cx('sidebaritem-wrapper')}>
            <div className={cx('sidebaritem-container')}>
                <div className={cx('sidebaritem-info')}>
                    <FontAwesomeIcon icon={data.icon} className={cx('icon')} />
                    <span className={cx('sidebaritem-title')}>{data.title}</span>
                </div>
                {
                    data.sub && <FontAwesomeIcon icon={faAngleDown} className={cx('icon-open')} />
                }
            </div>
        </div>
    )
}

export default SideBar;