import Header from './Header.js';
import Content from './Content.js'
import Footer from './Footer.js'
import { useState } from 'react'
function App() {
  const [items,setItems] = useState([
        {
            id:1,
            checked:true,
            item:"One half pound of cocoa covered almonds unsalted"
        },
        {
            id:2,
            checked:false,
            item:"Item 2"
        },
        {
            id:3,
            checked:false,
            item:"Item 3"
        }
    ])
    const handleCheck = (id) => {
      const listItems = items.map((item) => item.id===id ? {...item,checked:!item.checked}:item)
      setItems(listItems)
      localStorage.setItem('shoppinglist',JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
      const listItems = items.filter((item) =>item.id !== id)
      setItems(listItems)
      localStorage.setItem('shoppinglist',JSON.stringify(listItems))
    }
 return (
    <div className="App">
      <Header title="Grocery List"/>
      <Content
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
