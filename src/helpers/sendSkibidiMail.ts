import { resend } from "../lib/resend";
import SkibidiEmail from "../../emails/skibidiEmail";
import { ApiResponse } from "@/types/apiResponse";


export async function sendSkibidiEmail(email : string, username : string) : Promise<ApiResponse>{
    try{
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Skibidi Email for Nexora',
            react: SkibidiEmail({ username}),
        })
        console.log(data)
        return {
            success : true,
            message : "Skibidi email sent successfully"
        }
    }
    catch(emailError){
        console.error("Error sending skibidi email", emailError)
        return {
            success: false,
            message: "Failed to send skibidi email"
        }
    }
}

sendSkibidiEmail("sendingphotos20@gmail.com", "Aryan")