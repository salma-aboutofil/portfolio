"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

export async function submitContactForm(formData: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(formData)

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  // Here you would typically send an email or save to a database
  console.log("Form submitted:", result.data)

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}

