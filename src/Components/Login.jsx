import { useState } from "react";

export const Login = (props) => {
    console.log("LoggedIn Component Rendered")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);


    const togglePassword = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    return (
        <div className="relative loginpage h-screen lg:flex items-center justify-center overflow-x-hidden bg-[#F2F4F7] w-full">
            <div className="left min-w-1/2 max-sm:w-full px-20"> {/* Left section with 50% width, full width on small screens */}
                <h1 className="heading mt-5 text-6xl font-bold font-sans">facebook</h1>
                <p className="text-3xl inline-block mt-2 font-serif">
                    Facebook helps you connect and share<br /> with the people in your life
                </p>
            </div>

            <div className="right w-1/2 mt-96 flex flex-col items-center justify-center gap-4 px-20 sm:w-full sm:mt-0 sm:gap-4"> {/* Right section with flex-col for small screens */}
                <div className="bg-white mt-36 flex flex-col items-center gap-2 px-8 py-2 w-fit ">
                    <input
                        type="text"
                        placeholder="Enter Email or Phone number"
                        value={props.name}
                        id="text"
                        onChange={props.changeText}
                        className="py-3 text-xl px-3 outline-none border-slate-300 rounded-md w-96 border-[1px]"
                        onClick={() => {
                            let text = document.getElementById("text");
                            text.style.border = "1px solid skyblue";
                        }}
                        onMouseLeave={() => {
                            let text = document.getElementById("text");
                            text.style.border = "1px solid grey";
                        }}
                    />
                    <div className="password flex relative items-center">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            name="Password"
                            id="password"
                            placeholder="Password"
                            className="border-[1px] w-96 py-2 text-xl px-3 border-slate-300 rounded-md outline-none"
                            onClick={() => {
                                let passwordField = document.getElementById("password");
                                passwordField.style.border = "1px solid skyblue";
                            }}
                            onMouseLeave={() => {
                                let passwordField = document.getElementById("password");
                                passwordField.style.border = "1px solid grey";
                            }}
                            value={props.password}
                            onChange={props.changePassword}
                        />
                        <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v4/yo/r/P5YOMZ2AvVl.png"
                            alt="password icon"
                            className="w-6 h-6 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                            onClick={togglePassword} // Toggle password visibility when clicked
                        />
                    </div>

                    <button onClick={props.onLogin} className="loginBtn cursor-pointer px-32 py-3 text-xl bg-[#0866FF] text-white">
                        Login
                    </button>
                    <span className="cursor-pointer text-blue-600">Forgotten Password?</span>
                    <span className="w-full mt-5 border-[#DADDE1] border-b-2"></span>
                    <div className="button mt-10">
                        <button className="bg-[#3DAF26] text-white font-bold text-lg py-3 rounded-md px-5">
                            Create new account
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {["Create a Page for", " a celebrity brand or business."].map((item, idx) => {
                        return (
                            <p key={idx} className={idx === 0 ? "font-bold" : "font-light"}>
                                {item}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
