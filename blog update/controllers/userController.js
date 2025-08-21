import User from "../model/user.js"


export const createUser = async (req,res)=> {
     try{
        const user = await User.create(req.body)
        // user.create(req.body)
        res.status(201).json(user)
    }
    catch (err){
        console.log(err)
    }
}

export const getAllUser = async (req,res)=> {
     const user = await User.find()
    res.json(user).status(201)
}


export const getUserById = async (req,res)=> {
  try{
    const user = await User.findById(req.params.id)
    res.json(user)

  }
  catch (err){
    console.log(err)
  }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};
