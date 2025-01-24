import clsx from 'clsx'
import styles from './text.module.scss'

type TextProps = {
    size: 'small' | 'medium' | 'large' | 'extra-large'
    children: React.ReactNode
}

export const Text: React.FC<TextProps> = ({size, children}) => {
    return <p className={clsx(styles[size])}>{children}</p>
}

export default Text
