import React, {useState} from "react";
import styles from './Dropdown.module.scss'
import Icon from "../Icon/Icon";

const Dropdown = ({ options, initialText, isActions }: {options: any, initialText: string, isActions?: boolean}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (option: any) => {
      setSelectedOption(option);
      setIsOpen(false);
      console.log(option)
    };
  
    return (
      <div className={styles.dropdownContainer}>
        <div className={`${styles.dropdownButton} ${isOpen ? styles.open : ''}`} onClick={toggleDropdown}>
          <div className={styles.text}>
                {!isActions && <p className={styles.title}>Coin Name</p>}
                <p className={`${ styles.name}`}>{selectedOption || initialText}</p>
          </div>
          <Icon label='arrow-up'></Icon>
        </div>
        <div className={`${styles.dropdownList} ${isOpen ? styles.open : ''}`}>
          {options.map((option: any) => (
            <div
              key={option}
              className={styles.dropdownItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Dropdown;