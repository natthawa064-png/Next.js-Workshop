"use server"

import { profileSchema, validateWithZod } from '@/utils/schemas'
import { error } from 'console'

const renderError = (error:unknown):{message :string} => {
    return {
        message : error instanceof Error ? error.message : "Unknown error occurred"
    }
}


export const createProfileAction = async (prevState:any,formData: FormData) => {

    try {
        const rawData = Object.fromEntries(formData)
    const validateField = validateWithZod(profileSchema, rawData)
    console.log(validateField)
    return { message : "Profile created successfully" }
    } catch (error) {
        console.log(error);
        return renderError(error)
    }
}