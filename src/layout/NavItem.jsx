const NavItem = ({ item }) => {
    return (
        <li>
            <a href={item.url}>{item.title}</a>
        </li>
    )
}

export default NavItem
