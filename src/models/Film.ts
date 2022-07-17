import mongoose from 'mongoose';
import { FilmInfo } from '../interfaces/film/FilmInfo';

const FilmSchema = new mongoose.Schema(
  {
    writer: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    photo: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    keyword: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Keyword',
      },
    ],
    createAt: {
        type: Date,
        default: Date.now
    }
  },
  {
    timestamps: true, // createdAt, updatedAt 자동기록
  }
);

export default mongoose.model<FilmInfo & mongoose.Document>('Film', FilmSchema);
