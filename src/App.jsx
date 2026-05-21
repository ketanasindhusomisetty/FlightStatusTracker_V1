import './App.css'
import Login from './Login'
import Signup from './Signup'
function App() {
  return (
    <div>
      <nav>
        <h2>Flight Status Tracker</h2>

        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Sign Up</li>
          <li>Flights</li>
          <li>Contact</li>
        </ul>
      </nav>

      <hr />

      <h1>Welcome to Flight Status Tracker</h1>

      <p>
        Track live flight information quickly and easily.
      </p>

      <button>Check Flights</button>
      <Login />
      <Signup />
    </div>
  )
}

export default App