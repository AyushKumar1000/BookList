import React, { useState } from 'react';
import Booklist from './Booklist.jsx';

const BookAdd = () => {
    // const [Title, setTitle] = useState("");
    // const [Auther, setAuther] = useState("");
    // const [Genre, setGenre] = useState("");
    const [dataList, setDataList] = useState({Title:"",Auther:"",Genre:""});

    const handleSubmit = (e) => {
        // e.preventDefault();
        // if (Title && Auther && Genre) {
        //     setDataList([...dataList, { Title, Auther, Genre }]);
        //     setTitle("");
        //     setAuther("");
        //     setGenre("");
        // }
        const {name, value} = e.target;
        setDataList((prevData) => ({...prevData,[name]: value}));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Auther"
                    value={Auther}
                    onChange={(e) => setAuther(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Genre"
                    value={Genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <button type="submit">Add Book</button>
            </form>
            <Booklist dataList={dataList} />
        </div>
    );
};

export default BookAdd;