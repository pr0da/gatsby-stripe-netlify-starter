import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import useAuth from '../hooks/useAuth'

const IndexPage = () => {
  const [user, { login, logout, signup, manage }] = useAuth()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Sign Up for Premium Content</h1>

      {user ? (
        <div className="user-info">
          <button id="left" onClick={logout}>
            Log Out
          </button>
          <button id="right" onClick={manage}>
            Manage Subscription
          </button>
        </div>
      ) : (
        <div className="user-info">
          <button id="left" onClick={login}>
            Log In
          </button>
          <button id="right" onClick={signup}>
            Sign Up
          </button>
        </div>
      )}

      <div className="corgi-content">
        <div className="content">
          <h2>Free Content</h2>
          <div className="free"></div>
        </div>
        <div className="content">
          <h2>Pro Content</h2>
          <div className="pro"></div>
        </div>
        <div className="content">
          <h2>Premium Content</h2>
          <div className="premium"></div>
        </div>
      </div>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  )
}

export default IndexPage
