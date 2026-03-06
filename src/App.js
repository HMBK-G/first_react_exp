// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 50, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200' },
  { id: 2, name: 'Smart Watch', price: 120, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200' },
  { id: 3, name: 'Gaming Mouse', price: 25, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200' },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>hmbk Tech Store</h1>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Product List */}
        <div style={{ flex: 2 }}>
          <h2>Products</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {products.map(product => (
              <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '5px' }} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Cart Section */}
        <div style={{ flex: 1, borderLeft: '2px solid #eee', paddingLeft: '20px' }}>
          <h2>Your Cart ({cart.length})</h2>
          {cart.length === 0 ? <p>Cart is empty</p> : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
              ))}
            </ul>
          )}
          <hr />
          <h3>Total: ${totalPrice}</h3>
          {cart.length > 0 && <button onClick={() => setCart([])}>Clear Cart</button>}
        </div>
      </div>
    </div>
  );
}

export default App;