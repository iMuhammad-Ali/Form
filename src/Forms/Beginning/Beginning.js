import classes from './Beginning.module.css';

const Beginning = () => {
    return (
        <form className={classes.BeginningForm}>
            <h3>How soon do you want to begin tutoring?</h3>
            <ul>
                <li><input type="radio" name="option" value="Albanian" /><label>As soon as possible</label></li>
                <li><input type="radio" name="option" value="Arabic" /> <label>Within the next week</label></li>
                <li><input type="radio" name="option" value="English" /> <label>Within the next month</label></li>
                <li><input type="radio" name="option" value="Farsi" /> <label>During summer break</label></li>
                <li><input type="radio" name="option" value="Urdu" /> <label>Not sure</label></li>
            </ul>
        </form>
  );
}

export default Beginning;