"use client"

import { useState, useTransition } from "react"
import { greet } from "../app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function GreetingForm() {
  const [name, setName] = useState("")
  const [greeting, setGreeting] = useState("")
  const [error, setError] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    startTransition(async () => {
      const result = await greet(null, new FormData(event.currentTarget))
      if ('error' in result && result.error) {
        setError(result.error)
        setGreeting("")
      } else if ('message' in result && result.message) {
        setGreeting(result.message)
        setError("")
      }
    })
  }

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Enter your name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Submitting..." : "Greet Me!"}
          </Button>
        </form>

        {greeting && (
          <Alert className="mt-4">
            <AlertDescription className="text-center font-medium">{greeting}</AlertDescription>
          </Alert>
        )}
        {error && (
          <Alert className="mt-4" variant="destructive">
            <AlertDescription className="text-center font-medium">{error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}