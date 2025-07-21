import {z} from "zod"

const UserSchema = z.object({
    firstname : z.string().min(2, "First name must be at least 2 characters long").max(20, "First name must be at most 20 characters long"),
    lastname : z.string().min(2, "Last name must be at least 2 characters long").max(20, "Last name must be at most 20 characters long"),
    email : z.string().email("Invalid email"),
    password : z.string().min(8, "Password must be at least 8 characters long").max(30, "Password must be at most 30 characters long"),
    twitterpassword : z.string().min(8, "Twitter password must be at least 8 characters long").max(30, "Twitter password must be at most 30 characters long")
})

export default UserSchema


// const user = {
//     firstname : "Joe",
//     lastname : "Doe",
//     email : "joe",
//     password : "password",
//     twitterpassword : ""
// }

// const result = UserSchema.safeParse(user)

// if (!result.success) {
//     const result1 = result.error.message
//      const array1 = JSON.parse(result1)
//     // console.log(array)
//     const array2 = array1.map((error : string) => error.message)
//     console.log(array2)
// }
// else {
//     console.log(result)
// }