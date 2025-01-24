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
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
                <div>
                    <Button size="small" variant="normal">
                        Normal Small
                    </Button>
                </div>
                <div>
                    <Button size="medium" variant="normal">
                        Normal Medium
                    </Button>
                </div>
                <div>
                    <Button size="large" variant="normal">
                        Normal Large
                    </Button>
                </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
                <div>
                    <Button size="small" variant="outlined">
                        Outlined Small
                    </Button>
                </div>
                <div>
                    <Button size="medium" variant="outlined">
                        Outlined Medium
                    </Button>
                </div>
                <div>
                    <Button size="large" variant="outlined">
                        Outlined Large
                    </Button>
                </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
                <div>
                    <Button size="small" variant="contained">
                        Contained Small
                    </Button>
                </div>
                <div>
                    <Button size="medium" variant="contained">
                        Contained Medium
                    </Button>
                </div>
                <div>
                    <Button size="large" variant="contained">
                        Contained Large
                    </Button>
                </div>
            </div>
        </div>
    )
}
