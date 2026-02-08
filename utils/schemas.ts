import {z,ZodSchema} from 'zod'

// const profileSchema = z.string().min(2,{message: "มากกว่า 2 ตัวอักษร"}).max(50,{message: "น้อยกว่า 50 ตัวอักษร"})

export const profileSchema = z.object({
    firstName : z.string().min(2,{message: "ขื่อ มากกว่า 2 ตัวอักษร"}).max(50,{message: "น้อยกว่า 50 ตัวอักษร"}),
    lastName : z.string().min(2,{message: "นามสกุล มากกว่า 2 ตัวอักษร"}).max(50,{message: "น้อยกว่า 50 ตัวอักษร"}),
    userName : z.string().min(2,{message: "username มากกว่า 2 ตัวอักษร"}).max(50,{message: "น้อยกว่า 50 ตัวอักษร"}),
})

// const tam :string = 'tam'


export const validateWithZod = <T>(schema: ZodSchema<T>,data:unknown):T => {
    const result = schema.safeParse(data)
    if(!result.success) {
        const errors = result.error?.issues.map((error)=> error.message)
        throw new Error(errors.join(','))
    }
    return result.data
}