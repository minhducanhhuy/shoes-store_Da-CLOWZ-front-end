import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Register from './components/User/Register';
import Login from './components/User/Login';
import Home from './components/Home';
import Profile from './components/User/Profile/Profile';
import FormProductDetail from './components/Product/FormProductDetail';

function App() {
  const products = [
    {
      id: 1,
      name: 'New 2022 from zpunet',
      image: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png',
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      price: 300, // $
      status: 'In Stock',
      reviews: [
        {
          id: 1,
          name: 'giang',
          stars: 5,
          comment: 'nice',
          date: '07/26/2023',
        },
        {
          id: 2,
          name: 'giang',
          stars: 4,
          comment: 'nice',
          date: '08/22/2022',
        },
        {
          id: 3,
          name: 'giang',
          stars: 2,
          comment: 'nice',
          date: '06/20/2023',
        },
      ],
      quantity: 20,
    },
    {
      id: 2,
      name: 'New 2022 from zpunet',
      image: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png',
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      price: 300, // $
      status: 'In Stock',
      reviews: [
        {
          id: 1,
          name: 'giang',
          stars: 5,
          comment: 'nice',
          date: '07/26/2023',
        },
        {
          id: 2,
          name: 'giang',
          stars: 4,
          comment: 'nice',
          date: '08/22/2022',
        },
        {
          id: 3,
          name: 'giang',
          stars: 2,
          comment: 'nice',
          date: '06/20/2023',
        },
      ],
      quantity: 20,
    },
    {
      id: 3,
      name: 'New 2022 from zpunet',
      image: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png',
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      price: 300, // $
      status: 'In Stock',
      reviews: [
        {
          id: 1,
          name: 'giang',
          stars: 5,
          comment: 'nice',
          date: '07/26/2023',
        },
        {
          id: 2,
          name: 'giang',
          stars: 4,
          comment: 'nice',
          date: '08/22/2022',
        },
        {
          id: 3,
          name: 'giang',
          stars: 2,
          comment: 'nice',
          date: '06/20/2023',
        },
      ],
      quantity: 20,
    },
    {
      id: 4,
      name: 'New 2022 from zpunet',
      image: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png',
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      price: 300, // $
      status: 'In Stock',
      reviews: [
        {
          id: 1,
          name: 'giang',
          stars: 5,
          comment: 'nice',
          date: '07/26/2023',
        },
        {
          id: 2,
          name: 'giang',
          stars: 4,
          comment: 'nice',
          date: '08/22/2022',
        },
        {
          id: 3,
          name: 'giang',
          stars: 2,
          comment: 'nice',
          date: '06/20/2023',
        },
      ],
      quantity: 20,
    },
    {
      id: 5,
      name: 'New 2022 from zpunet',
      image: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png',
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      price: 300, // $
      status: 'In Stock',
      reviews: [
        {
          id: 1,
          name: 'giang',
          stars: 5,
          comment: 'nice',
          date: '07/26/2023',
        },
        {
          id: 2,
          name: 'giang',
          stars: 4,
          comment: 'nice',
          date: '08/22/2022',
        },
        {
          id: 3,
          name: 'giang',
          stars: 2,
          comment: 'nice',
          date: '06/20/2023',
        },
      ],
      quantity: 20,
    },
    {
      id: 6,
      name: 'New 2022 from zpunet',
      image: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png',
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      price: 300, // $
      status: 'In Stock',
      reviews: [
        {
          id: 1,
          name: 'giang',
          stars: 5,
          comment: 'nice',
          date: '07/26/2023',
        },
        {
          id: 2,
          name: 'giang',
          stars: 4,
          comment: 'nice',
          date: '08/22/2022',
        },
        {
          id: 3,
          name: 'giang',
          stars: 2,
          comment: 'nice',
          date: '06/20/2023',
        },
      ],
      quantity: 20,
    },
    {
      id: 7,
      name: 'New 2022 from zpunet',
      image: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png',
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      price: 300, // $
      status: 'In Stock',
      reviews: [
        {
          id: 1,
          name: 'giang',
          stars: 5,
          comment: 'nice',
          date: '07/26/2023',
        },
        {
          id: 2,
          name: 'giang',
          stars: 4,
          comment: 'nice',
          date: '08/22/2022',
        },
        {
          id: 3,
          name: 'giang',
          stars: 2,
          comment: 'nice',
          date: '06/20/2023',
        },
      ],
      quantity: 20,
    },
    {
      id: 8,
      name: 'New 2022 from zpunet',
      image: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png',
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      price: 300, // $
      status: 'In Stock',
      reviews: [
        {
          id: 1,
          name: 'giang',
          stars: 5,
          comment: 'nice',
          date: '07/26/2023',
        },
        {
          id: 2,
          name: 'giang',
          stars: 4,
          comment: 'nice',
          date: '08/22/2022',
        },
        {
          id: 3,
          name: 'giang',
          stars: 2,
          comment: 'nice',
          date: '06/20/2023',
        },
      ],
      quantity: 20,
    },
    {
      id: 9,
      name: 'New 2022 from zpunet',
      image: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5817.png',
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
      price: 300, // $
      status: 'In Stock',
      reviews: [
        {
          id: 1,
          name: 'giang',
          stars: 5,
          comment: 'nice',
          date: '07/26/2023',
        },
        {
          id: 2,
          name: 'giang',
          stars: 4,
          comment: 'nice',
          date: '08/22/2022',
        },
        {
          id: 3,
          name: 'giang',
          stars: 2,
          comment: 'nice',
          date: '06/20/2023',
        },
      ],
      quantity: 20,
    },
  ];

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home productsProp={products} />} />
          <Route path="/Register" exact element={<Register />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Profile" exact element={<Profile />} />
          {products.map((product, index) => {
            const linkProduct = '/products/' + product.id;
            return <Route path={linkProduct} exact element={<FormProductDetail key={index} productProp={product} />} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
