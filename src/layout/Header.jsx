import NavItem from "./NavItem"

const Header = ({navigation}) => {
    return (
        <header>
			<nav>
                <ul>
                    {navigation.map((item, index) => (
                        <NavItem key={index} item={item}/>
                    ))}
                </ul>
            </nav>
	    </header>
    )
}

export default Header