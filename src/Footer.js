const Footer = ({length}) => {
    // const today = new Date()
    return (
        <footer>
            <p>
                {/* Copyright &copy; {today.getFullYear()} */}
                {length} List {length===1?"item":"items"}
            </p>
        </footer>
    )
}
export default Footer