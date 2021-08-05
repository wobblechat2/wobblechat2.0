import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//There will only be one instance of this component on the page
//Requirements: one inherited prop: userId, must interact with DB and consequently update state upon confirmation of 
//  successful post to db

const CreateQuestionForm = (props) => {
  //using useState hook to enable state in component
  //first item = current value, second item = a setter function, to update value, destrctured via [] and initialized to empty string
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  console.log('this:',description)
  //not working
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`This is what was submitted: ${title}`);
  }


  return (
    <div className='questionCreate'>
      <form onSubmit={handleSubmit}>
        <div className='add_question'>
          <label className="title_label">
            Title:
            <input
            type="text" 
            className="add_title"
            value={title} 
            onChange={e => setTitle(e.target.value )}
            />
          </label>
          <textarea
          rows="4" cols="50"
          className='add-description'
          value={description} 
          onChange={e => setDescription(e.target.value)}
          ></textarea>
          <input type="submit" value="Submit" className='add_submitBtn'/>
        </div>
      </form>
    </div>
  );
}

export default CreateQuestionForm;


