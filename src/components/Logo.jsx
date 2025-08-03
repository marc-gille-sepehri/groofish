import { motion } from 'framer-motion'

const Logo = ({ size = 40, className = '' }) => {
  return (
    <motion.div
      className={`logo ${className}`}
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: size * 0.4,
        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 5
      }}
      transition={{ duration: 0.3 }}
    >
      G
    </motion.div>
  )
}

export default Logo 