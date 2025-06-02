import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  const handleLogin = () => {
    // محاكاة تسجيل الدخول
    router.push('/dashboard')
  }

  return (
    <main>
      <h1>تسجيل الدخول</h1>
      <button onClick={handleLogin}>تسجيل الدخول</button>
    </main>
  )
}