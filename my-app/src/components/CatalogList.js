import React from 'react'
import Button from 'react-bootstrap/Button'
import BootstrapTable from 'react-bootstrap-table-next'
const linkFollow = (cell, row, rowIndex, formatExtraData) => {
  const routName = `/catalog/:${row.id}`
  return (
    <>
      <Button
        href={routName}
        onClick={() => {
          onFollowChanged(row)
        }}
      >
        Редактировать
      </Button>
      <Button
        onClick={() => {
          onFollowChanged(row)
        }}
      >
        Удалить
      </Button>
    </>
  )
}
const products = [
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 102 },
]
const columns = [
  {
    dataField: 'id',
    text: 'id',
    sort: true,
  },
  {
    dataField: 'name',
    text: 'Name',
    sort: true,
  },
  {
    dataField: 'price',
    text: 'Product Price',
  },
  {
    dataField: 'follow',
    text: 'Follow',
    formatter: linkFollow,
    sort: true,
  },
]

const onFollowChanged = (row) => {
  console.log(row)
}

const CatalogList = (props) => (
  <>
    <Button href="/catalog/create">Создать каталог</Button>
    <BootstrapTable keyField="id" data={products} columns={columns} />
  </>
)
export default CatalogList
