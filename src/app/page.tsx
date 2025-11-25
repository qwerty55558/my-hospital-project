import style from "@/css/Index.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <>
            <div className={style.videoContainer}>
                <video autoPlay loop muted src={"/vid/mainVideo.mp4"}></video>
            </div>
            <div className={style.arrowContainer}>
                <FontAwesomeIcon icon={faArrowDown} beatFade={true} className={"top-[-2rem] text-gray-500/50 relative text-xl sm:text-2xl md:text-4xl"} />
            </div>
            <div className={style.contentContainer}>
                <h1>welcome</h1>
            </div>
        </>
    );
}
