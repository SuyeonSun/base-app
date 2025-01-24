import {useState} from 'react'
import {Checkbox} from '.'

const meta = {
    title: 'base/Checkbox',
}

export default meta

export const 체크박스 = () => {
    const [isChecked, setIsChecked] = useState(false)
    const clickCheckbox = () => {
        setIsChecked(!isChecked)
    }
    return (
        <div>
            <Checkbox checked={isChecked} onChange={clickCheckbox} />
        </div>
    )
}
