import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document {
    content : string;
    createdAt: Date;
}

const MessageSchema : Schema<Message> = new Schema({
    content: {type: String, required: true},
    createdAt: {type:Date, required:true, default: Date.now}
})

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isverified: boolean;
    isAcceptingMessage: Boolean;
    message: Message;
}

const UserSchema : Schema<User> = new Schema({
    username: { type: String, required: true, trim: true, unique: true },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    password: { type: String, required: true },
    verifyCode: { type: String, required: true },
    verifyCodeExpiry: { type: Date, required: true },
    isAcceptingMessage: { type: Boolean, default: true },
    message: { type: MessageSchema },
    isverified: {type: Boolean, default: false}
});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);



export default UserModel;