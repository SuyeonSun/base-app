import {Button} from '.'

const meta = {
    title: 'base/Button',
    args: {
        corpId: '002',
        myDataOrgCode: '',
        name: '',
        type: '',
    },
    argTypes: {
        width: {
            control: {type: 'number'},
        },
        height: {
            control: {type: 'number'},
        },
        type: {
            control: {
                type: 'select',
            },
        },
    },
}

export default meta

export const 버튼 = () => {
    return (
        <div>
            hi
            <Button />
        </div>
    )
}
