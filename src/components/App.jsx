import React, { useState } from "react";
import Header from "../components/Header";
import Note from "../components/Note";
import Footer from "../components/Footer";
import CreateArea from "./CreateArea";

function App(){
    const [notes, setNotes] = useState([]);

    function addNotes(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea 
                onAdd={addNotes}
            />
            {notes.map((noteItem, index) => {
                return (
                    <Note 
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                )
            })}
            <Footer />
        </div>
    )
}

export default App;