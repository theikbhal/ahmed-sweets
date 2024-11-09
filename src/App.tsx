// src/App.tsx
import { useState } from 'react'
import './App.css'
import sweetIcon from './assets/sweet-icon.svg'

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
    <div className="app-container">
      <div className="header">
        <div className="logo-container">
          <img src={sweetIcon} alt="Ahmed Sweets Logo" className="logo" />
          <h1>Ahmed Sweets</h1>
        </div>
        <p className="header-subtitle">Authentic Traditional Sweets Since 1960</p>
      </div>

      <div className="content">
        <div className="product-card">
          <div className="product-image">
            <div className="special-badge">Special</div>
          </div>
          
          <div className="product-info">
            <h2>Palakova</h2>
            <p className="description">
              Experience the rich taste of tradition with our signature Palakova. 
              Handcrafted with pure ingredients using time-honored recipes.
            </p>
            
            <div className="price-tag">
              <span className="price-amount">₹{pricePerKg}</span>
              <span className="price-unit">per kg</span>
            </div>
            
            <div className="quantity-section">
              <label htmlFor="quantity">Quantity (kg)</label>
              <div className="quantity-control">
                <button 
                  className="quantity-btn"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <button 
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="total-section">
              <span>Total Amount</span>
              <span className="total-amount">₹{pricePerKg * quantity}</span>
            </div>
            
            <div className="contact-section">
              <div className="contact-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>+91 9901014560</span>
              </div>
              <div className="contact-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
                <span>{upi}</span>
              </div>
            </div>
            
            <button className="order-button" onClick={handleOrder}>
              <span>Order on WhatsApp</span>
              <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App