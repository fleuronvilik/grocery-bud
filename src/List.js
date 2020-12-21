import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, edit, del }) => {
  return (
    <ul className="grocery-container">
      {items.map((item, index) => {
        return (
          <li key={index} className="grocery-item">
            {item}
            <span>
              <button
                className="edit-btn"
                onClick={() => edit(item, index)}>
                <FaEdit/>
              </button>
              <button
                className="delete-btn"
                onClick={() => del(item)}>
                <FaTrash/>
              </button>
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default List
