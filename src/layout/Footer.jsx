import NavItem from "./NavItem"

const Footer = ({navigation}) => {
    return (
        <footer>
			<nav>
                <ul>
                    {navigation.map((item, index) => (
                        <NavItem key={index} item={item}/>
                    ))}
                </ul>
            </nav>
	    </footer>
    )
}

export default Footer