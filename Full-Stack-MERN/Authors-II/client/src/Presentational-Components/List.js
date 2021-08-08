import axios from'axios';
import React ,{useState,useEffect} from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const List = props => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
        .then(res => setAuthors(res.data))
        .catch(err => console.log(err))
    },[])

    const deleteData = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
        console.log(authorId);
    }

    return (
        <React.Fragment>
            <table>
                <tr>
                    <th>{props.h1}</th>
                    <th>{props.h2}</th>
                </tr>
            {authors.map( item => {
                return(
                    <React.Fragment key={item._id}>
                        <tr>
                            <td>{item.name}</td>
                            <td><DeleteButton id={item._id} onDelete={deleteData}/><EditButton id={item._id}/></td>
                        </tr>
                    </React.Fragment>
                )
            })}
            </table>
        </React.Fragment>
    )
}

export default List
