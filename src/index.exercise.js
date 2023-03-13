import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = React.useState('none')

  function closeModal() {
    setOpenModal('none')
  }

  function showLoginData(formData) {
    console.log('login', formData)
    closeModal()
  }

  function showRegistryData(formData) {
    console.log('registry', formData)
    closeModal()
  }

  return (
    <>
      <Logo />
      <h1>Mi librería</h1>
      <button onClick={() => setOpenModal('login')}>Login</button>
      <button onClick={() => setOpenModal('registry')}>Registro</button>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <h2>Login</h2>
        <LoginForm onSubmit={showLoginData} buttonText="Login" />
        <button onClick={closeModal}>Close</button>
      </Dialog>
      <Dialog aria-label="Registry form" isOpen={openModal === 'registry'}>
        <h2>Registry</h2>
        <LoginForm onSubmit={showRegistryData} buttonText="Register" />
        <button onClick={closeModal}>Close</button>
      </Dialog>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

export {root}
