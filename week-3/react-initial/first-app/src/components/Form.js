import React from 'react';

const Form = () => {
  return (
    <div>
      <form className="user-form">
        <div>
          <label>Name: </label>
          <input type="text" value="" />
        </div>
        <div>
          <label>Age: </label>
          <input type="text" value="" />
        </div>
        <button>Submit</button>
      </form>
      <div className="flex">
        <div className="first">
          First
        </div>
        <div className="second">
          Second
        </div>
      </div>
    </div>
  );
};

export default Form;