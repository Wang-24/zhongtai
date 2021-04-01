
import React, { FC } from 'react'
import style from './index.less'
import FormList from './FormList'
const LoginList: FC = () => {
    return <div className={style.container}>
        登录
        <div className={style.form} >
            <FormList />
        </div>


    </div>
}

export default LoginList
