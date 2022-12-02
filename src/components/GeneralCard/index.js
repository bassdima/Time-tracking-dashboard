import './styles.css';
import avatar from "./image-jeremy.png";
import { Navbar } from '../Navbar';

export function GeneralCard({ onNavbarClick, selectedItem }) {
  return (
    <div className='general-card'>
        <div className='general-card__title'>
            <img className="avatar" src={avatar} alt="avatar of developer" />
            <div className="title-text">
                <h1 className="title-text__first-line">Report for</h1>
                <p className="title-text__second-line">Jeremy Robson</p>
            </div>
        </div>
        <Navbar
            onNavbarClick={onNavbarClick}
            selectedItem={selectedItem}
        />
    </div>
  );
}


