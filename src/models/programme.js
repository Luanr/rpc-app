import schema from 'schm';

export const Programme = schema({
  name: String,
  description: String,
  startDate: String,
  endDate: String,
  duration: Number,
  imageUrl: String,
  category: String,
});