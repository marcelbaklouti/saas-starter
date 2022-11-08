// redirect to /user/[id]/profile
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import useSWR from 'swr'

async function fetchUser() {
  const res = await fetch('/api/user')
  return await res.json()
}

export default function User() {
  const { data: user, error } = useSWR('/api/user', fetchUser)
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session && user) router.push(`/user/${user.id}/profile`)
  }, [router ,session, user])
}
