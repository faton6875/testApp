import React from 'react'
import Table from 'react-bootstrap/Table'
const CatalogList = (props) => (
  <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Название</th>
          <th>Кол-во товара</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </>
)
export default CatalogList
