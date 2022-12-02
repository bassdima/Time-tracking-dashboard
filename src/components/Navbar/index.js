import { NAVBAR_TEXT } from '../../constans'
import { Fragment } from 'react';
import { capitalizeFirstLetter } from '../../helpers';
import classNames from 'classnames';
import './styles.css';

export function Navbar({ onNavbarClick, selectedItem}) {

    function selectContentClickHandler(event) {
        onNavbarClick(event.target.value)
    }

    return (
          <div className='navbar'>
            { NAVBAR_TEXT.map((item) => {
                return(
                    <Fragment key={item}>
                        <input id={item}
                            className="select-input"
                            type="radio"
                            name="singleSelect"
                            value={item}
                            defaultChecked={NAVBAR_TEXT[1]}
                            onClick={selectContentClickHandler} />
                        <label
                            htmlFor={item}
                            className={classNames("nabar-text",
                            {"nabar-text__weekly" : item === "weekly"},
                            {"navbar-select" : item === selectedItem})}>
                            {capitalizeFirstLetter(item)}
                        </label>
                    </Fragment>
                );
            })}
        </div>
    );
  }