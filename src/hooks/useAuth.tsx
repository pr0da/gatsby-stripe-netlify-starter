import { useEffect, useState, useCallback } from 'react'
import netlifyIdentity, { User } from 'netlify-identity-widget'

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const handleUserStateChange = (user?: User) => setUser(user ?? null)
    netlifyIdentity.on('init', handleUserStateChange)
    netlifyIdentity.on('login', handleUserStateChange)
    netlifyIdentity.on('logout', handleUserStateChange)
    netlifyIdentity.init()
  }, [])

  const login = useCallback(() => netlifyIdentity.open('login'), [])
  const signup = useCallback(() => netlifyIdentity.open('signup'), [])
  const logout = useCallback(() => netlifyIdentity.logout(), [])

  return [user, { login, signup, logout }] as const
}

export default useAuth
