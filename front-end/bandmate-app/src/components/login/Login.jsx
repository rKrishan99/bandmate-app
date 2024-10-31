import React from 'react'

const Login = () => {
  return (
    <div className='bg-transparent'>
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login