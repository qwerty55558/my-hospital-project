import style from "@/css/Index.module.css";

export default function Home() {
    return (
        <>
            <div className={style.videoContainer}>
                <video autoPlay loop muted src={"/vid/mainVideo.mp4"}></video>
            </div>
            <div className={style.floatArrow}>

            </div>
            <div className={style.contentContainer}>
                <h1>welcome</h1>
            </div>
        </>
    );
}
