import clsx from 'clsx'
import styles from './button.module.scss'

type ButtonProps = {
    children: React.ReactNode
    size: 'small' | 'medium' | 'large'
    variant: 'normal' | 'outlined' | 'contained'
    style?: React.CSSProperties
}

export const Button: React.FC<ButtonProps> = ({children, size, variant, style}) => {
    return (
        <button className={clsx(styles.button, styles[size], styles[variant])} style={style}>
            {children}
        </button>
    )
}
