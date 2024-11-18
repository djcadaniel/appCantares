import { useContext } from 'react'
import { AppContext } from '../context/LandingContext'

export const useMenu = () => {
  const context = useContext(AppContext)
  return context
}