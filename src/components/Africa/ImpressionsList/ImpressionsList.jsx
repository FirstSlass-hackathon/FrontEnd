import React from "react";
import s from './style.module.scss';
import lion from '../../../assets/images/lion.jpeg';

export const ImpressionsList = () => {
    return (
        <div className={s.impressionsList}>
            <img className={s.image} src={lion} alt="lion" />
            <div className={s.text}>
                <div className={s.symbol}>“</div>
                    <p className={s.impression}>lorem ipsum dolor sit<br></br>
                    amet consectetur. Tortor<br></br>
                    vitae tincidunt nibh<br></br>
                    feugiat pulvinar viverra<br></br>
                    feugiat. Lectus interdum<br></br>
                    eu rutrum nibh feugiat id.</p>
                <div className={s.signature}>Автор сообщения</div>
            </div>
        </div>
    );
}