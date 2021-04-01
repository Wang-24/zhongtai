import React, { FC } from 'react'
import * as  cookie from '@/utils/cookie'
import { Space, Button } from 'antd'
import { history } from 'umi'
const MyHeadRight: FC = () => {
    return <div>
        <Space>
            <span> {cookie.getCookie("username")} </span>
            <Button type="primary" onClick={() => { history.push('/login') }}>退出</Button>
        </Space>
    </div>
}
export default MyHeadRight