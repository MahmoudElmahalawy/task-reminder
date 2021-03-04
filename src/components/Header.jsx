import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log("clicked")
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} color='black' text='إضافة' />
        </header>
    )
}

Header.defaultProps = {
    title: 'متتبع المهام',
}

export default Header
