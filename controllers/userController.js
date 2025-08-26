export const updateProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    user.name = req.body.name || user.name;
    if (req.file) {
      user.avatar = `/uploads/${req.file.filename}`;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      avatar: updatedUser.avatar,
      token: generateToken(updatedUser.id),
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
