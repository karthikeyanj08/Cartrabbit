import mongoose  from'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
     required: true,
    maxlength: 50,
    match: /^[A-Za-z ]+$/,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    match: /^(?=.*[A-Z])(?=.*\d).+$/,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    match: /^\d{10}$/,
  },
  token:{
    type:String,
    

  }
/*   securityAnswer: {
    type: String,
    required: true,
    maxlength: 100,
  },
 */});

const User = mongoose.model('User', userSchema);

export default User;

