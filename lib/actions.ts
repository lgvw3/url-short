'use server'

import { z } from "zod"
import { mapToLongs, mapToShorts, incrementCounter } from "./maps"

const zURLFormSchema = z.object({
    initialURL: z.string().url()
})


export type URLFormState = {
    errors?: {
        initialURL?: string[]
    },
    message?: string | null
}

export async function createShortURL(prevState: URLFormState, formData: FormData) {


    const validatedFields = zURLFormSchema.safeParse({
        initialURL: formData.get('initial-url')
    })

    if (!validatedFields.success) {
        return {
            message: "Invalid URL",
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    const { initialURL } = validatedFields.data


    if (mapToShorts.has(initialURL)) {
        return {
            message: "Short URL Exists",
            shortURL: mapToShorts.get(initialURL)
        }
    }
    else {
        const i = incrementCounter()
        const shortString = 'http://localhost:8080/' + i.toString()

        mapToShorts.set(initialURL, shortString)
        mapToLongs.set(shortString, initialURL)
        return {
            message: "Success",
            shortURL: shortString
        }
    }

}