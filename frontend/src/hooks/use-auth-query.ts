import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import type { SignInCredentials, SignUpCredentials, User } from '@/lib/api/auth'
import { authApi } from '@/lib/api/auth'

export function useAuthQuery() {
  const queryClient = useQueryClient()

  // Query to get the current user
  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const accessToken = localStorage.getItem('accessToken')
      if (!accessToken) return null

      try {
        return await authApi.getUser(accessToken)
      } catch (error) {
        // Try to refresh token
        const refreshToken = localStorage.getItem('refreshToken')
        if (refreshToken) {
          try {
            const tokens = await authApi.refreshToken(refreshToken)
            localStorage.setItem('accessToken', tokens.data.accessToken)
            localStorage.setItem('refreshToken', tokens.data.refreshToken)

            return await authApi.getUser(tokens.data.accessToken)
          } catch (refreshError: any) {
            // Only clear tokens if it's an unauthorized error (401)
            // This way we keep tokens if server is down or other network issues
            if (
              refreshError.status === 401 ||
              refreshError.message?.tolowercase().includes('Unauthorized')
            ) {
              localStorage.removeItem('accessToken')
              localStorage.removeItem('refreshToken')
            }
            return null
          }
        }
        return null
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: false,
  })

  // Mutation for sign in
  const signInMutation = useMutation({
    mutationFn: (credentials: SignInCredentials) => authApi.signIn(credentials),
    onSuccess: async (data) => {
      localStorage.setItem('accessToken', data.data.accessToken)
      localStorage.setItem('refreshToken', data.data.refreshToken)

      const userData = await authApi.getUser(data.data.accessToken)
      queryClient.setQueryData(['user'], userData)
    },
  })

  // Mutation for sign up
  const signUpMutation = useMutation({
    mutationFn: (credentials: SignUpCredentials) => authApi.signUp(credentials),
    onSuccess: async (data) => {
      localStorage.setItem('accessToken', data.data.accessToken)
      localStorage.setItem('refreshToken', data.data.refreshToken)

      const userData = await authApi.getUser(data.data.accessToken)
      queryClient.setQueryData(['user'], userData)
    },
  })

  // Function to sign out
  const signOut = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      if (accessToken) {
        await authApi.signOut(accessToken)
      }
    } catch (error) {
      console.error('Error during sign out:', error)
    } finally {
      // Always clean up local storage and redirect
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      queryClient.setQueryData(['user'], null)
      queryClient.invalidateQueries({ queryKey: ['user'] })
    }
  }

  return {
    user: userQuery.data?.data.user as User | null,
    isLoading: userQuery.isLoading,
    isAuthenticated: !!userQuery.data,
    signIn: signInMutation.mutate,
    signInError: signInMutation.error,
    isSigningIn: signInMutation.isPending,
    signUp: signUpMutation.mutate,
    signUpError: signUpMutation.error,
    isSigningUp: signUpMutation.isPending,
    signOut,
  }
}
