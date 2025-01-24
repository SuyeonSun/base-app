import {useState} from 'react'
import {Checkbox} from '../Checkbox'
import {Button} from '../Button'
import {Text} from '../Text'

const meta = {
    title: 'base/Cart',
}

export default meta

export const 장바구니 = () => {
    const [isChecked, setIsChecked] = useState(false)
    const clickCheckbox = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <div>
                <Checkbox checked={isChecked} onChange={clickCheckbox} />
            </div>
            <div style={{width: '80px', height: 'auto', backgroundColor: 'lightGrey'}}></div>
            <div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '8px'}}>
                    <Text size="small">W BASIC DUCK DOWN CROP PUFFER light pink</Text>
                    <Text size="small">S / 1개</Text>
                    <Text size="small">207,200원</Text>
                </div>
                <div style={{display: 'flex', gap: '5px'}}>
                    <Button size="medium" variant="outlined" style={{width: '100%'}}>
                        옵션 변경
                    </Button>
                    <Button size="medium" variant="outlined" style={{width: '100%'}}>
                        쿠폰 사용
                    </Button>
                </div>
            </div>
        </div>
    )
}
