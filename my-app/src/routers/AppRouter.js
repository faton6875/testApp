import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CatalogForm from '../components/CatalogForm'
import CatalogList from '../components/CatalogList'
import ProductForm from '../components/ProductForm'
import ProductsList from '../components/ProductsList'

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route path="/" component={CatalogList} exact={true} />
        <Route path="/products" component={ProductsList} />
        <Route path="/product/create" component={ProductForm} />
        <Route path="/catalog/create" component={CatalogForm} />
        <Route path="/catalog/:сatalogId" component={CatalogForm} />
        <Route path="/product/:productId" component={ProductForm} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
