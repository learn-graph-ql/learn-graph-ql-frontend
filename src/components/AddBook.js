import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getAuthorsQuery } from "../queries/queries";


export default function AddBooks() {
    
    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [bookName, setBookName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");

    const displayAuthors = () =>{
        if (loading) return <option disabled>Loading...</option>;
        if (error) return <option disabled>Error Loading authors</option>;
        if(data){
            const {authors} = data;
            return authors.map((author) => {
                return (
                    <option key={author.id} value={author.id}>
                        {author.name}
                    </option>
                );
            });
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log({
            bookName,
            genre,
            authorId
        });
    };

    return (
        <div>
            <form id= "add-book" onSubmit={submitForm}>
                <div className= "field">
                    <label>Book Name</label>
                    <input 
                        type="text" 
                        value={bookName} 
                        onChange={(e) => setBookName(e.target.value)} 
                    />
                </div>

                <div className= "field">
                    <label>Genre</label>
                    <input 
                        type="text" 
                        value={genre} 
                        onChange={(e) => setGenre(e.target.value)} 
                    />
                </div>

                <div className= "field">
                    <label>Author</label>
                    <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
                        <option value="">Select author</option>
                        {displayAuthors()}
                    </select>
                </div>

                <button>+</button>

            </form>
        </div>
    )
}