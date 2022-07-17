import mongoose from 'mongoose';
import { UserInfo } from '../interfaces/user/UserInfo';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  characterId: {
    type: Number,
  },
  characterName: {
    type: String,
  },
  growthRate: {
    type: Number,
    required: true,
    default: 0,
  },
  level: {
    type: Number,
    required: true,
    default: 1,
  },
  film: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Film',
    },
  ],
  count: {
    type: Number,
    required: true,
    default: 0,
  },
  fcmToken: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model<UserInfo & mongoose.Document>('User', UserSchema);
