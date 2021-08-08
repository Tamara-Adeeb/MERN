import React from 'react';
import Delete from '../Container-components/Delete';
import Edit from './Edit';

const ListOfAuthors = (props) => {
    console.log(props.authors);
    return (
        
            <table>
                <tr>
                    <th>Author</th>
                    <th>Action Available</th>
                </tr>
            {props.authors.map(item => {
                return(
                    <React.Fragment key={item.id}>
                        <tr>
                            <td> {item.name}</td>
                            <td> <Edit id={item._id}/> <Delete id={item._id}/></td>
                        </tr>
                    </React.Fragment>
                )
            } )}
            </table>
        
    )
}

export default ListOfAuthors
