import schema from 'schm';

export const Programme = schema({
  name: String,
  description: String,
  startDate: Number,
  startDateH: String,
  endDate: Number,
  endDateH: String,
  duration: Number,
  category: String,
});