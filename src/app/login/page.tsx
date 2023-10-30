import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import Button from "../components/button";
interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
    return <div>
        <NavBar />
        <Footer />
    </div>;
};

export default Login;
