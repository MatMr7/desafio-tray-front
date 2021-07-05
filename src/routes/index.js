import HomeComponent from '../components/Home/HomeComponent'
import CreateSellerComponent from '../components/Seller/CreateSellerComponent'
import ListSellerComponent from '../components/Seller/ListSellersComponent'
import CreateSaleComponent from '../components/Sale/CreateSaleComponent'
import ListSaleComponent from '../components/Sale/ListSalesComponent'

export default [
    {path: '/', component: HomeComponent, name: 'home'},

    {path: '/seller/create', component: CreateSellerComponent, name: 'createSeller'},
    {path: '/seller/list', component: ListSellerComponent, name: 'listSellers'},

    {path: '/sale/create', component: CreateSaleComponent, name: 'createSale'},
    {path: '/sale/list', component: ListSaleComponent, name: 'listSales'},


]