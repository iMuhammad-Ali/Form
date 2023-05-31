import { useState } from 'react';
import classes from './Forms.module.css'
import Languages from './Languages/Languages';
import Beginning from './Beginning/Beginning';
import Name from './Name/Name';
import Email from './Email/Email';
import Number from './Number/Number';
import Address from './Address/Address';

const Forms = () => {
    const [currentPage, setCurrentPage] = useState(1);
    // const onSubmitHandler = (event) => {
    //     event.preventDefault();
    //     alert('Form Submitted! Thank You!')
    // }
    const handleBack = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    }
    
    const handleNext = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    }

    const renderForm = () => {
    switch (currentPage) {
      case 1:
        return (<Beginning /> );
      case 2:
        return (<Languages /> );
      case 3:
        return (<Name />);
      case 4:
        return (<Email /> );
      case 5:
        return (<Number /> );
      case 6:
        return (<Address /> );
      default:
        return null;
    }
  };

    return (
        <div className={classes.Form}>
            {renderForm()}
            <div className={classes.FormTogglers}>
                <button onClick={handleBack} disabled={currentPage === 1}>&lt; Prev</button>
                <button onClick={handleNext} disabled={currentPage === 6}>Next &gt;</button>
            </div>
        </div>
    );
}

export default Forms;