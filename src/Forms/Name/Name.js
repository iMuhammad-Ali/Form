import classes from './Name.module.css';

const Name = () => {
    return (
        <form className={classes.NameForm}>
            <h3>Name</h3>
            <div className={classes.Name}>
                <div>
                    <input type="text" />
                    <p>First Name</p>
                </div>
                <div>
                    <input type="text" />
                    <p>Last Name</p>
                </div>
            </div>
        </form>
  );
}

export default Name;