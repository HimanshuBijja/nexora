import { resend } from "../lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/apiResponse";


export async function sendVerificationEmail(email : string, username : string, verifyCode : string) : Promise<ApiResponse>{
    try{
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification Code for Nexora',
            react: VerificationEmail({ username, otp: verifyCode}),
        })
        console.log(data)
        return {
            success : true,
            message : "Verification email sent successfully"
        }
    }
    catch(emailError){
        console.error("Error sending verification email", emailError)
        return {
            success: false,
            message: "Failed to send verification email"
        }
    }
}

// sendVerificationEmail("sendingphotos20@gmail.com", "Jhon doe", "123123")