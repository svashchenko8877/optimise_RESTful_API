import mongoose, {Schema} from 'mongoose';

const uri = 'mongodb://localhost:27017/mydb';

const connectDB = async () => {
    mongoose.connect(uri);
    const MyModel = mongoose.model('Test', new Schema({ name: String }));
    await MyModel.findOne();
};

export default connectDB;
