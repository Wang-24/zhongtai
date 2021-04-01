import React, { useState } from 'react'
import { Table } from 'antd';
import { Space, Button, Switch } from 'antd'
import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import { Dispatch } from 'umi'
import { listType } from './model'
export default function UseTable({ list, dispatch }: { list: listType, dispatch: Dispatch }) {

    const del = (id: number) => {
        dispatch({
            type: 'use/del',
            payload: {
                id
            }
        })
    }
    const modifyState = (checked: boolean, id: number) => {
        dispatch({
            type: 'use/modifyState',
            payload: {
                uId: id,
                type: checked
            }
        })
    }
    const columns: any = [
        {
            title: 'ID',
            width: 50,
            dataIndex: 'id',
            key: 'name',
            fixed: 'left',
        },
        {
            title: '用户名',
            width: 60,
            dataIndex: 'username',
            key: 'username',
            fixed: 'left',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: '1',
            width: 150,
        },
        {
            title: '电话',
            dataIndex: 'mobile',
            key: '2',
            width: 150,
        },
        {
            title: '角色',
            dataIndex: 'role_name',
            key: 'role_name',
            width: 150,
        },
        {
            title: '状态',
            key: '5',
            width: 100,
            render(o: any) {
                return <Switch
                    checked={o.mg_state}
                    onChange={(checked) => { modifyState(checked, o.id) }}
                />
            }
        },
        {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 110,
            render(o: any) {
                return <div>
                    <Space>
                        <Button
                            type="primary"
                        >
                            <EditOutlined />
                        </Button>
                        <Button
                            type="primary"
                            danger
                            onClick={() => { del(o.id) }}
                        >
                            <DeleteOutlined />
                        </Button>
                        <Button
                            type="primary"
                            style={{ background: "orange", borderColor: "orange" }}
                        >
                            <SettingOutlined />
                        </Button>
                    </Space >
                </div>
            }
        },
    ];
    return <div>
        <Table
            columns={columns}
            dataSource={list}
            rowKey={'id'}
            scroll={{ x: 1500, y: 600 }}
        />
    </div>

}

