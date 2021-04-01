import React, { useEffect } from 'react'
import UseButton from './UseButton'
import UseTable from './UseTable'
import style from './index.less'
import { connect, Dispatch } from 'umi'
import { listType, useModelType } from './model'
const UseList = ({ list, dispatch, total }: { list: listType, dispatch: Dispatch, total: number }) => {
    useEffect(() => {
        dispatch({
            type: "use/getList",
            payload: {
                query: '',
                pagenum: 1,
                pagesize: 10
            }
        })

    }, [])
    return <div className={style.use_list}>
        <h1>用户列表</h1>
        <div className={style.container}>
            <UseButton list={list} dispatch={dispatch} />
            <UseTable list={list} dispatch={dispatch} />
        </div>
    </div>

}
export default connect(
    ({ use }: { use: useModelType }) => use
)(UseList)

