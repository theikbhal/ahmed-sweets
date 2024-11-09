// src/App.tsx
import { useState } from 'react'
import './App.css'

function App() {
  const [quantity, setQuantity] = useState(1)
  const pricePerKg = 400
  const contact = "919901014560"
  const upi = "9901014560@ybl"

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  const handleOrder = () => {
    const message = encodeURIComponent(
      `Hi, I would like to order:\n${quantity} kg of Palakova\nTotal: ₹${pricePerKg * quantity}`
    )
    window.open(`https://wa.me/${contact}?text=${message}`, '_blank')
  }

  return (
    <div className="container">
      <h1>Ahmed Sweets</h1>
      
      <div className="card">
        <h2>Palakova</h2>
        <p className="description">
          Traditional and delicious Palakova made with pure ingredients
        </p>
        
        <div className="price">₹{pricePerKg} per kg</div>
        
        <div className="quantity-input">
          <label htmlFor="quantity">Quantity (kg): </label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        
        <div className="total">
          Total: ₹{pricePerKg * quantity}
        </div>
        
        <div className="contact-info">
          <p>Contact: +91 9901014560</p>
          <p>UPI: {upi}</p>
        </div>
        
        <button onClick={handleOrder}>
          Order on WhatsApp
        </button>
      </div>
    </div>
  )
}

export default App
