'use client'

import { actionFunction } from "@/utils/types"
import { useActionState } from "react"
import { useEffect } from "react"

const initialState = {
    message: ''
}


const FormContainer = ({ action, children }: {action:actionFunction, children: React.ReactNode }) => {
    const [state, formAction] = useActionState(action, initialState)
    console.log("state999", state)

    useEffect(() => {
        if (state.message) {
            alert(state.message)
        }
    }, [state])

    return (
        <form action={formAction}>
            {children}
        </form>
    )
}
export default FormContainer