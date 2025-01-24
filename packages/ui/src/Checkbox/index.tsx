import clsx from 'clsx'
import styles from './checkbox.module.scss'

type CheckboxProps = {
    checked: boolean
    onChange: () => void
}

export const Checkbox: React.FC<CheckboxProps> = ({checked, onChange}) => {
    return <input type="checkbox" checked={checked} onChange={onChange} className={clsx(styles.checkbox)} />
}

export default Checkbox
