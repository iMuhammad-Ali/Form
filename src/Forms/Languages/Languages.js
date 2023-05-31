import classes from './Languages.module.css';

const Languages = () => {
    return (
        <form className={classes.LanguagesForm}>
            <h3>What languages can you tutor</h3>
            {/* <input type="checkbox" id="English" value="English" /> <label for="English">English</label> */}
            <ul>
                <li><input type="checkbox" value="Albanian" /> <label>Albanian</label></li>
                <li><input type="checkbox" value="Arabic" /> <label>Arabic</label></li>
                <li><input type="checkbox" value="English" /> <label>English</label></li>
                <li><input type="checkbox" value="Farsi" /> <label>Farsi</label></li>
                <li><input type="checkbox" value="French" /> <label>French</label></li>
                <li><input type="checkbox" value="German" /> <label>German</label></li>
                <li><input type="checkbox" value="Hebrew" /> <label>Hebrew</label></li>
                <li><input type="checkbox" value="Hindi" /> <label>Hindi</label></li>
                <li><input type="checkbox" value="Italian" /> <label>Italian</label></li>
                <li><input type="checkbox" value="Japanese" /> <label>Japanese</label></li>
                <li><input type="checkbox" value="Korean" /> <label>Korean</label></li>
                <li><input type="checkbox" value="Mandarin" /> <label>Mandarin</label></li>
                <li><input type="checkbox" value="Pashto" /> <label>Pashto</label></li>
                <li><input type="checkbox" value="Portuguese" /> <label>Portuguese</label></li>
                <li><input type="checkbox" value="Russian" /> <label>Russian</label></li>
                <li><input type="checkbox" value="Spanish" /> <label>Spanish</label></li>
                <li><input type="checkbox" value="Urdu" /> <label>Urdu</label></li>
                <li><input type="checkbox" value="Veitnamese" /> <label>Veitnamese</label></li>
            </ul>
                <p>Only select languages you can speak fluently</p>
        </form>
  );
}

export default Languages;