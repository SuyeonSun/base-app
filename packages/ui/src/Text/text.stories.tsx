import {Text} from '.'

const meta = {
    title: 'base/Text',
}

export default meta

export const 텍스트 = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Text size="small">작은 텍스트</Text>
            <Text size="medium">중간 텍스트</Text>
            <Text size="large">큰 텍스트</Text>
            <Text size="extra-large">더 큰 텍스트</Text>
        </div>
    )
}
