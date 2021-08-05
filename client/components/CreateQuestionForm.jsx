import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//There will only be one instance of this component on the page
//Requirements: one inherited prop: userId, must interact with DB and consequently update state upon confirmation of 
//  successful post to db

const CreateQuestionForm = (props) => {
  //using useState hook to enable state in component
  //first item = current value, second item = a setter function, to update value, destrctured via [] and initialized to empty string
  const [newTitle, setTitle] = useState('');
  const [newDescription, setDescription] = useState('');
  
  console.log('this:',newDescription)
  //not working
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle ,
        description: newDescription,
      }),
    })
      .then((response) => {
        //history.push("/");
      })
      .catch((err) => {
        console.log("Error making fetch request", err);
      });
    //history.push("/");
  }
/*
  const handleTitleInputChange = (e) => {
    e.persist();
    setTitle(e.target.value);
  }
  const handleDescriptionInputChange = (e) => {
    e.persist();
    setDescription(e.target.value);
  }
  */


  return (
    <div className='questionCreate'>
      <form onSubmit={handleSubmit}>
        <div className='add_question'>
          <label className="title_label">
            newTitle:
            <input
            type="text" 
            className="add_title"
            value={newTitle} 
            onChange={e => setTitle(e.target.value )}
            />
          </label>
          <textarea
          rows="4" cols="50"
          className='add-newDescription'
          value={newDescription} 
          onChange={e => setDescription(e.target.value)}
          ></textarea>
          <input type="submit" value="Submit" className='add_submitBtn'/>
        </div>
      </form>
    </div>
  );
}

export default CreateQuestionForm;


