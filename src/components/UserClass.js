import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name:"DummyName",
        location:"DummyLocation",
        public_repos:"DummyRepos"
      }  
    };
    console.log("Constructor inside component")
  }
  // i made this async as i was making an api call
  async componentDidMount(){
    console.log("Component Did Mount")
    const data = await fetch("https://api.github.com/users/PrudhviRajMacherla");
    const json = await data.json();
    this.setState({
        userInfo:json,
    })

  }
  componentDidUpdate(){
    console.log("Component Did Update")
  }
  componentWillUnmount(){
    console.log("Component is unmounted")
  }
  render() {
    console.log("component inside render")
    // const { name, location } = this.props;
    const { name,location,public_repos,avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Class Based component</h1>
        <h1>My github Profile</h1>
        <img src={avatar_url} alt="Empty Image"/>
        <h2>My Name is : {name}</h2>
        <h2>I Stay in {location}</h2>
        <h2>My Github Contributions/Repos Count: {public_repos}</h2>
       
      </div>
    );
  }
}
export default UserClass;
