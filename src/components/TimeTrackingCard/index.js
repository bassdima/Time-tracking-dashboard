import { capitalizeFirstLetter } from '../../helpers';
import ellipsis from './images/icon-ellipsis.svg';
import './styles.css'

export function TimeTrackingCard ({ selectedItem, timeTrackingData }) {
    return(
        <>
            {timeTrackingData.map((item) => {
                return <section key={item.title} className={`time-tracking-card ${item.title}-section`}>
                        <div className="time-tracking-card__main-box">
                            <div className="main-box__firstline">
                                <p className="main-box__title">{
                                    (item.title === 'self-care') ? 'Self Care' : capitalizeFirstLetter(item.title)
                                }</p>
                                <div className="main-box__icon">
                                    <img src={ellipsis} alt="icon-ellipsis" />
                                </div>
                            </div>
                            <div className="main-box__secondline">
                                <p className="text-current">{
                                    `${item.timeframes[selectedItem].current}hrs`
                                }</p>
                                <p className="text-last">{
                                    `Last Week - ${item.timeframes[selectedItem].previous}hrs`
                                }</p>
                            </div>
                        </div>
                    </section>
                })}
        </>
    );
}
