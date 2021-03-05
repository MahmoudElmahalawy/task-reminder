import Button from './Button'

const Header = ({title, showAdd, onAdd}) => {
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onAdd} color={!showAdd ? 'black' : '#c82323'} text={!showAdd ? 'إضافة' : 'إلغاء'} />
        </header>
    )
}

Header.defaultProps = {
    title: 'متتبع المهام',
}

export default Header
