import User from "../models/user.model.js";

const register = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(200).json({
            message: "Successfully signed up!",
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const login = (req, res) => {
    return res.json(req.body);
};

export { register, login };
