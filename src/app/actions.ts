"use server"

export async function greet(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name")

    // Input validation
    if (typeof name !== "string" || name.trim().length === 0) {
      return { error: "Please enter a valid name" }
    }

    // Process the name (e.g., SANJEEV S PURANIK)
    const formattedName = name.trim()

    // Return greeting message
    return {
      message: `Hello ${formattedName}! Welcome to our application.`,
      error: null,
    }
  } catch (error) {
    return {
      error: "An error occurred while processing your request",
      message: null,
    }
  }
}