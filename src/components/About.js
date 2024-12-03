import UserClass from "./UserClass";
import User from "./User";

const About = ()=>{
    return (
        <div>
            <h1>About component</h1>
            <h2>Namaster React</h2>
            {/* <User name={"Prudhvi"} location={"Vizag"}/> */}
            <UserClass name={"Kalyan"} location={"Kakinada"}/>
        </div>
    );
}
export default About;