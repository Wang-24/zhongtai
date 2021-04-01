import React from 'react'
import { Space, Input, Button } from 'antd'
import * as xlsx from '@/utils/xlsx'
const { Search } = Input
import { Dispatch } from 'umi'
import { listType } from './model'
export default function UseButton({ list, dispatch }: { list: listType, dispatch: Dispatch }) {
    const exportFile = () => {
        const replaceMap = {
            id: "ID",
            username: "用户名",
            email: "邮箱",
            mobile: "电话",
            role_name: "角色"
        }
        xlsx._export(list, '用户数据', replaceMap)
    }
    const onSearch = (e: any) => {
        dispatch({
            type: "use/getList",
            payload: {
                query: e,
                pagenum: 1,
                pagesize: 10
            }
        })
    }
    return <div>
        <Space>
            <Search
                placeholder="输入ID搜索"
                allowClear
                enterButton="Search"
                onSearch={onSearch}
            ></Search>
            <Button
                type="primary"
            >添加用户</Button>
            <Button
                type="primary"
                onClick={exportFile}
            >导出表格</Button>
        </Space>
    </div>

}
