import { motion } from 'framer-motion'

const Button = ({color, text, onClick}) => {
    return <motion.button 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className='btn' 
    onClick={onClick} 
    style={{backgroundColor: color}}>{text}</motion.button>
}

export default Button
