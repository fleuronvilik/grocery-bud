import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [input, setInput] = useState("")
  const [groceries, setGroceries] = useState([])
  const [alertText, setAlertText] = useState("")
  const [toEdit, setToEdit] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      setAlertText("")
    }, 2000)
  }, [alertText])

  const handleSubmit = e => {
    e.preventDefault()
    setGroceries(prev => {
      if (toEdit < 0) {
        setAlertText("Item Added To The List")
        return [...prev, input]
      } else {
        setAlertText("Value Changed")
        const arr = [...prev]
        arr[toEdit] = input
        return arr
      }
    })
    setInput("")
    setToEdit(-1)
  }

  const edit = (input, i) => {
    setInput(input)
    setToEdit(i)
  }

  const del = li => {
    setGroceries(groceries.filter(item => item !== li))
    setAlertText("Item Removed")
  }

  return (
    <div>
      <div className="section-center">
        {alertText && <Alert text={alertText} />}
        <form className="grocery-form" onSubmit={handleSubmit}>
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              value={input}
              placeholder="e.g. eggs"
              className="grocery"
              onChange={e => setInput(e.target.value)}
            />
            <button className="submit-btn" type="submit">
              {toEdit < 0 ? "Submit" : "Edit"}
            </button>
          </div>
        </form>
        <List items={groceries} edit={edit} del={del}/>
        {!groceries.length || 
          <button
            className="clear-btn"
            onClick={() => setGroceries([])}>
            Clear Items
          </button>}
      </div>
    </div>
  )
}

export default App
