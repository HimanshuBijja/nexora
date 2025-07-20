
interface UserMessages {
    content: String;
    createdAt: Date;
}

export interface ApiResponse {
    message: string;
    success: boolean;
    isAcceptingMessages?: boolean;
    Messages? : Array<UserMessages>
}