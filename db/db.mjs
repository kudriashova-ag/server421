import mongoose from "mongoose";

mongoose.connect('mongodb+srv://kudriashovaag:web001@cluster0.ab16ifu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

export default mongoose.connection