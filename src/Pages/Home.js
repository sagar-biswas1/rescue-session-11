import React, { useEffect, useState } from 'react';
import NoteCard from '../components/noteCard/NoteCard';
import InputForm from '../components/inputForm/InputForm';
const Home = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
  
     fetch("notes.json")
     .then(res=>res.json())
     .then(data=>setNotes(data))
  
      
    }, []);
    /*
  1. here there will be a function named handleSearch
  to handle search by query, and it will be passed as props to header
  
    */
    
  
  
  
  
  
  
    
  /*2. here there will be a function named handleDelete
  to delete a note, and it will be passed as props to NoteCard that will be triggered using delete button.
   */
  
  
  
  
  
  
  
  
  
  
  
    /*
  3. there will be a function named handleUpdate
      to update data, and it will be passed as props to NoteCard and 
     later it will be passed to Update modal using props.
   */
  
  
  
     
  
  
  
    /*
  4.  there will be a function named handlePost
  to post data to backend, and it will be passed as props to InputFrom.
   */
  
    

    return (
        <div>
           <InputForm />
      <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
        {notes.map((note) => (
          <NoteCard
            note={note}
          />
        ))}
      </div>
        </div>
    );
};

export default Home;