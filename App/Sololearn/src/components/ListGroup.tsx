import { useState } from "react";
function ListGroup() {
    const list = [
        'New York',
        'Nairobi',
        'Paris',
        'Cairo',
        'Tokyo'
        ]
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List</h1>
            <ul className='list-group'>
                {list.map((item, index) => (
                    <li
                        key={index}
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        onClick={() => setSelectedIndex(index)} // Fix: Pass a function reference instead of invoking setSelectedIndex directly
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ListGroup;
