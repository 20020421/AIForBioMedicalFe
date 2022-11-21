import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../../../assets/images";
import style from './Header.module.scss';
import NavBarItem from "./NavBarItem";

const cx = classNames.bind(style);

const nav = [
    {
        id: 1,
        title: 'Home',
        to: '/',
        sub: [
            {
                id: 2,
                title: 'AI For BioMedical Images',
                to: '/ai-for-biomedical-images',
            },
            {
                id: 4,
                title: 'In The Future',
                to: '/future',
            }
        ]
    },
    {
        id: 3,
        title: 'Our Team',
        to: '/our-team'
    }
]


function Header() {

    const [isOver, setIsOver] = useState(window.scrollY >= 100);

    const headerRef = useRef(null);

 

    useEffect(() => {
        const over = () => {
            if (headerRef.current !== null) {
                if (window.scrollY >= headerRef.current.clientHeight) {
                    setIsOver(true); 
                } else {
                    setIsOver(false)
                }
            }
        }
        window.addEventListener('scroll', over);

        return () =>  window.removeEventListener('scroll', over);
    }, [])
    return ( <div ref={headerRef} className={cx('wrapper', [isOver ? 'fixed' : ''])}>
        <div className={cx('container')}>
            <Link to='/' className={cx('logo')}>
                <img src={images.logo} alt='logo' />
            </Link>
            <div className={cx('nav')}>
                <nav>
                    {
                        nav.map((item, index) => (
                            <NavBarItem data={item} key={index} />
                        ))
                    }
                </nav>
                <div className={cx('register')}>
                    <Link to='/register' className={cx('btn')}>
                        <span>Register</span>
                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                    </Link>
                </div>
            </div>
        </div>

    </div> );
}

export default Header;