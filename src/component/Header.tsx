import style from "@/css/Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Header() {



    return (
        <>
            <div className={style.navContainer}>
                <Image src="/img/logo.png" width={48} height={48} alt="logo" />

                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 cursor-pointer text-xl md:text-3xl" />
                    <FontAwesomeIcon icon={faUser} className="w-6 h-6 ml-2 cursor-pointer text-xl md:text-3xl" />
                </div>
            </div>
        </>
    );
}