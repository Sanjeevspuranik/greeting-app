"use server"

export async function greet(formData: FormData) {
  try {
    const name = formData.get("name")

    if (typeof name !== "string" || name.trim().length === 0) {
      return { error: "Name cannot be empty. Please enter a valid name." }
    }

    const formattedName = name.trim()
    return { message: `Hello ${formattedName}! Welcome to our application.` }
  } catch (error) {
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return { error: "An error occurred while processing your request" }
  }
}