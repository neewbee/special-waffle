import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import classnames from 'classnames'
import { Link } from 'dva/router'
import DropOption from '../../../components/DropOption'
import AnimTableBody from '../../../components/DataTable/AnimTableBody'
import styles from './List.less'

const confirm = Modal.confirm

const List = ({
  onDeleteItem,
  onEditItem,
  isMotion,
  ...tableProps
}) => {
  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: 'Are you sure delete this record?',
        onOk () {
          onDeleteItem(record.id)
        },
      })
    }
  }

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: text => <img alt={'avatar'} width={24} src={text} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
    },
    {
      title: 'NickName',
      dataIndex: 'nickName',
      key: 'nickName',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'isMale',
      key: 'isMale',
      render: text => <span>{text ? 'Male' : 'Female'}</span>,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'CreateTime',
      dataIndex: 'created_at',
      key: 'createTime',
      render: (text) => {
        return `${new Date(text).toLocaleDateString()}`
      },
    },
    {
      title: 'Operation',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return (
          <DropOption
            onMenuClick={e => handleMenuClick(record, e)}
            menuOptions={[
              { key: '1', name: 'Update' },
              { key: '2', name: 'Delete' },
            ]}
          />
        )
      },
    },
  ]

  const getBodyWrapperProps = {
    page: 1,
    current: 1,
  }

  const getBodyWrapper = body => {
    return isMotion
      ? <AnimTableBody {...getBodyWrapperProps} body={body} />
      : body
  }

  return (
    <div>
      <Table
        {...tableProps}
        className={classnames({
          [styles.table]: true,
        })}
        bordered
        scroll={{ x: 1250 }}
        columns={columns}
        simple
        rowKey={record => record.id}
        getBodyWrapper={getBodyWrapper}
      />
    </div>
  )
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default List
