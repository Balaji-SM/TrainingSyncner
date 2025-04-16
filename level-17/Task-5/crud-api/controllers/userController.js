const createUser = async (req, res) => {
    try {
      const { name, email, age } = req.body;
  
      if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
      }
  
      const user = new User({ name, email, age });
      await user.save();
  
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          message: "Email already exists. Please use a different email."
        });
      }
  
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  