// import axios from 'axios';
// import React,{useState,useEffect} from 'react';
// import List from './List';

// const AllAuthors = () => {
//     const [authors, setAuthors] = useState([]);

//     const deleteData = authorId => {
//         setAuthors(authors.filter(author => author._id !== authorId));
//     }
    
//     useEffect(() => {
//         axios.get("http://localhost:8000/api/author")
//         .then(res => setAuthors(res.data))
//         .catch(err => console.log(err))
//     },[])

//     return (
//         <div>
//             <List data={authors} h1="Author" h2="Actions Avalable"  />
//         </div>
//     )
// }

// export default AllAuthors
