import App from './App.jsx'
// import ErrorPage from './ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import Store from './components/Store/Store.jsx'
import FruitPage from './components/FruitPage/FruitPage.jsx'

const routes = [
    {
        path: '/',
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'store', element: <Store /> },
            { path: 'store/:name', element: <FruitPage /> }
        ],

    },
]

export default routes