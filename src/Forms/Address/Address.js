import classes from './Address.module.css';
import icon from '../../icons/email-icon.png'

const Address = () => {
    return (
        <form className={classes.AddressForm}>
            <h3>Address</h3>
            <input type="text" />
            <p>Street Address</p>
            <input type="text" />
            <p>Address Line 2</p>
            <div className={classes.ShortInputs}>
                <div>
                    <input type="text" />
                    <p>City</p>
                </div>
                <div>
                    <input type="text" />
                    <p>State/Region/Province</p>
                </div>
                <div>
                    <input type="text" />
                    <p>Postal / Zip Code</p>
                </div>
                <div>
                    <select>
                        <option selected>By IP Location</option>
                        <option>Australia</option>
                        <option>Pakistan</option>
                        <option>America</option>
                        <option>Argentina</option>
                    </select>
                    <p>Country</p>
                </div>
            </div>
        </form>
  );
}

export default Address;