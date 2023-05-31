import classes from './Number.module.css';
import NumberIcon from '../../icons/phone-icon.png';

const Number = () => {
    return (
        <form className={classes.NumberForm}>
            <h3>Phone Number</h3>
            <select>
                <option>+92</option>
                <option>+11</option>
                <option>+33</option>
            </select>
            <input type="text" />
        </form>
  );
}

export default Number;