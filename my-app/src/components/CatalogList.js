import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
const foo = (e) => console.log(e)

const CatalogList = (props) => (
  <>
    <Button href="/catalog/create">Создать каталог</Button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Название</th>
          <th>Кол-во товара</th>
          <th>Описание</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <Button href="/catalog/:id" onClick={foo}>
            Редактировать
          </Button>
          <Button> Удалить</Button>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <Button> Редактировать </Button>
          <Button> Удалить</Button>
        </tr>
        <tr>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <Button> Редактировать </Button>
          <Button> Удалить</Button>
        </tr>
      </tbody>
    </Table>
  </>
)
export default CatalogList
