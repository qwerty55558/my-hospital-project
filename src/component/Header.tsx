import style from "@/css/Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {



    return (
        <>
            <div className={style.navContainer}>
                <img src="/img/logo.png" alt="logo" />
                <div>
                    환영합니다!
                </div>
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 cursor-pointer" />
                    <FontAwesomeIcon icon={faUser} className="w-6 h-6 ml-2 cursor-pointer" />
                </div>
            </div>
        </>
    );
}