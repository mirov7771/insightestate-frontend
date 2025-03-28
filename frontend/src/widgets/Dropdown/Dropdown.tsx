import {FC, useState} from "react";
import styles from './Dropdown.module.scss';
import {localField} from "@/i18n/localField";
import {ArrowDown} from "@/shared/assets/icons";

export const Dropdown: FC = () => {
    const [dropdownState, setDropdownState] = useState({ open: false });
    const handleDropdownClick = () =>
        setDropdownState({ open: !dropdownState.open });
    const handleClickOutside = () => setDropdownState({ open: false })

    const handleRusLanguage = () => {
        localStorage.setItem('language', 'ru')
        handleClickOutside()
        window.location.reload()
    }

    const handleEngLanguage = () => {
        localStorage.setItem('language', 'en')
        handleClickOutside()
        window.location.reload()
    }

    return (
        <div className={styles.container}>
            <button
                type="button"
                className={styles.button}
                onClick={handleDropdownClick}
            >
                {localField('language')}
            </button>
            {dropdownState.open && (
            <div className={styles.dropdown}>
                <ul>
                    <li onClick={handleRusLanguage}>Rus</li>
                    <li onClick={handleEngLanguage}>Eng</li>
                </ul>
            </div>
            )}
        </div>
    );
}
