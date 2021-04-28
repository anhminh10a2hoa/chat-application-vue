import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const login = async(email, password) => {
  error.value = null
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    if(!res) {
      throw new Error('Could not complete to login')
    }

    error.value = null

    return res
  } catch(err) {
    error.value = err.message
  }
}

const useLogin = () => {
  return {error, login}
}

export default useLogin