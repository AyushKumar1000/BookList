import React from "react";

const Booklist = ({ dataList }) => {
    return (
        <div>
            <h3>Book List</h3>
            <ul>
                {dataList.map((book, index) => (
                    <li key={index}>
                        {book.Title} by {book.Auther} - Genre: {book.Genre}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Booklist;