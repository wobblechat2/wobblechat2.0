import React from 'react';
import {Link} from 'react-router-dom';

//There will only be one instance of this component on the page
//Requirements: one inherited prop: userId, must interact with DB and consequently update state upon confirmation of 
//  successful post to db

const CreateQuestionForm = (props) => {
  //form fields: first item = current value, second item = a setter, to update value
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(title, description);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
        type="text" 
        value={title} 
        onChange={e => setTitle(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit Question" />




    </form>


  );
}