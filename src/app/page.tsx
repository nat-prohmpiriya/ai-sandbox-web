"use client"

import * as React from "react"
import { SignInForm } from "@/components/auth/SignInForm"
import { SignUpForm } from "@/components/auth/SignUpForm"

export default function HomePage() {
  const [isSignIn, setIsSignIn] = React.useState<boolean>(true)

  const toggleForm = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Space theme background */}
      <div className="w-1/2 hidden lg:flex relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3RhcnMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwMCIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuOCIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNiIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iODAiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNSIvPjxjaXJjbGUgY3g9IjkwIiBjeT0iNzAiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuOCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjc3RhcnMpIi8+PC9zdmc+')`,
          }}
        />
        <div className="relative z-10 flex flex-col justify-center items-center text-center p-12 space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl font-light leading-tight">
              The Future
              <br />
              Through Space
            </h1>
            <p className="text-lg opacity-80 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Lorem possuere at odio
              nullam pariatur enim consequat at vitae. Elit ullamcorper
              ultricies magna malesuada erat.
            </p>
          </div>

          {/* Rocket illustration placeholder */}
          <div className="w-80 h-80 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <div className="w-16 h-32 bg-gray-300 rounded-lg mx-auto mb-4 shadow-lg">
                <div className="w-full h-4 bg-orange-500 rounded-t-lg"></div>
              </div>
              <div className="flex space-x-2 justify-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {isSignIn ? (
            <SignInForm onToggleForm={toggleForm} />
          ) : (
            <SignUpForm onToggleForm={toggleForm} />
          )}
        </div>
      </div>
    </div>
  )
}
