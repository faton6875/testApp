import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ProductForm = (props) => (
  <>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Название товара</Form.Label>
        <Form.Control placeholder="Введите текст" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Модель</Form.Label>
        <Form.Control placeholder="Введите текст" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Цена</Form.Label>
        <Form.Control placeholder="Введите текст" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Описание</Form.Label>
        <Form.Control placeholder="Введите текст" />
      </Form.Group>
      <Button variant="primary">Создать</Button>
      <Button>Отмена</Button>
    </Form>
  </>
)
export default ProductForm
