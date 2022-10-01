import UsersModel from '../../../models/Users';
import dbConnect from '../../../utility/dbConnect';
import { compare } from '../../../utility/password';

const post = async (req, res) => {
  const { email, password } = req.body;

  await dbConnect();

  const user = await UsersModel.findOne({ email });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'invalid',
    });
  }

  const passIsCorrect = compare(password, user.password);

  if (passIsCorrect) {
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  }

  return res.status(401).json({
    success: false,
    message: 'invalid',
  });
};

export { post };
