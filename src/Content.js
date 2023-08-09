import ItemList from './ItemList'
const Content = ({items,handleCheck,handleDelete}) => {
    // const [count,setCount] = useState(0)
    // const handleNameChange = () => {
    //     const names = ['Jack','Bob',"Carl","Saad"]
    //     const int = Math.floor(Math.random()*4)
    //     setName (names[int])
    // }
    // const handleClick = () => {
    //     setCount(count + 1)
    //     setCount(count + 1)
    //     console.log(count)
    // }
    
    // const handleClick2 = () => {
    //     console.log(count)
    // }
    
   
    return (
        <main>
            {/* <p onDoubleClick = {handleClick}>Hello {name}!</p>
            <button onClick = {handleNameChange}>Change Name</button>
            <button onClick = {handleClick}>Click It</button>
            <button onClick = {handleClick2}>Click It</button> */}

            {items.length ? (
            <ItemList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
            ):(
                <p style={{marginTop:'2rem'}}>Your list is Empty.</p>
            )}



        </main>
    )
}

export default Content