import { User } from "../../models/user";


export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        const newUser = await User.create({ username, email, password });
        res.status(201).json({ message: "User registered successfully", data: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const comparePassword = await password === user.password;
        if (!comparePassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}