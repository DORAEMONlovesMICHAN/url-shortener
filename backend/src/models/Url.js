import mongoose,{ Schema} from "mongoose";

const urlSchema = new Schema({
    originalUrl: { 
        type: String, 
        required: true 
    },
    shortId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    clicks: { 
        type: Number, 
        default: 0 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    lastAccessed: { type: Date }
});

export default mongoose.model("Url", urlSchema);