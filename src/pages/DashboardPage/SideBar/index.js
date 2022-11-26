import { faAngleDown, faChartSimple, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from '../DashboardPage.module.scss';

const cx = classNames.bind(style);


const sidebars = [
    {
        id: 1,
        title: 'Analytics',
        icon: faChartSimple,
        to: '/ai-for-biomedical-images'
    },
    {
        id: 2,
        title: 'Diagnostics',
        icon: faStethoscope,
        to: '/ai-for-biomedical-images/lung',
        sub: [
            {
                id: 3,
                title: 'Chest X-ray',
                to:'/ai-for-biomedical-images/lung',
            },
            {
                id: 4,
                title: 'Bone X-ray',
                to:'/ai-for-biomedical-images/bone',
            }
        ]
    }
]


function SideBar() {

    const location = useLocation();
    const [chose, setChose] = useState(location.pathname === sidebars[0].to ? sidebars[0].id : sidebars[1].id);

    useEffect(() => {
        setChose(location.pathname === sidebars[0].to ? sidebars[0].id : sidebars[1].id)
    },[location])
   

    const handleClick = (id) => {
        setChose(id);
    }
    return ( <div className={cx('sidebar-wrapper')}>
        <div className={cx('container')}>
            <div className={cx('header')}>
                <span>Menu</span>
            </div>
            <div className={cx('sidebar-items')}>
                {
                    sidebars.map((item, index) => (
                        <SideBarItem data={item} key={index} isChose = {chose === item.id} handleClick={handleClick} />
                    ))
                }
            </div>
        </div> 
    </div> );
}

function SideBarItem({data, isChose, handleClick}) {
    

    const [isOpen, setIsOpen] = useState(isChose);
    const [subHeight, setSubHeight] = useState();
    
    const location = useLocation();
    let item;
    

    
    

    const [subChose, setSubChose] = useState(item !== undefined ? item.to : '');

    useEffect(() => {
        if (data.sub !== undefined) {
            item = data.sub.find(element => element.to === location.pathname);
        }
        
        setSubChose(item !== undefined ? item.to : '')
    }, [location])


    console.log(subChose)

    const subRef = useRef(null);

    useEffect(() => {
        if (subRef.current !== null) {
            setSubHeight(subRef.current.scrollHeight);
        }
    }, [subRef])



    return (
        <div className={cx('sidebaritem-wrapper' , [isChose ? 'isChose': ''])} >
            {
                data.sub === undefined ? (<div className={cx('sidebaritem-container')}> 
                <div className={cx('sidebar-parent')}> 
                    <Link to={data.to} className={cx('sidebaritem-info')}>
                        <FontAwesomeIcon icon={data.icon} className={cx('icon')} />
                        <span className={cx('sidebaritem-title')}>{data.title}</span>
                    </Link>
                </div>
                
            </div>) : (<div className={cx('sidebaritem-container')} >
                <div className={cx('sidebar-parent')} onClick= {() => {
                setIsOpen(!isOpen)
            }}> 
                    <div className={cx('sidebaritem-info')}>
                        <FontAwesomeIcon icon={data.icon} className={cx('icon')} />
                        <span className={cx('sidebaritem-title')}>{data.title}</span>
                    </div>
                    <FontAwesomeIcon icon={faAngleDown} className={cx('icon-open',[isOpen ? 'rotate' : ''])} />
                </div>
                <div ref={subRef} style={isOpen && subRef.current !== null ? {height: subHeight + 'px'} : {}} className={cx('sub-items', [isOpen ? 'open' : ''])}>

                    {
                        data.sub.map((subItem, index) => (
                            <div key={index} className={cx('sub-item', [subChose === subItem.to ? 'sub-chose' : ''])} onClick={() => setSubChose(subItem.to)}>
                            <Link to={subItem.to} key={index}>
                                {subItem.title}
                            </Link>
                            </div>

                        ))
                    }

                </div>
            </div>)
            }
            
        </div>
    )
}

export default SideBar;