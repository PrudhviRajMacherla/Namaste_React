# Parcel
-Dev Build
-Local Server
-Caching
-Hot Module Reload
-Bundling
-Differntial Bundling
-Tree Shaking - removing unused code
-Different dev and prod bundles
-Consistent Hashing
-Minifies

# Foodies


Two Types of Export/Import

-Default export/import

export default component;
import component from "./location";

-Named export/import

export const Component()=>{};
import {Component} from "./location"

# React Hooks
-Normal Js utility Functions
Two imp hooks
-> useState() - SuperPowerful state variables in react
-> useEffect()

# React LifeCycle Methods

-----Mounting Cycle--------
-> Construtor(dummy) - updating state with dummy dat
-> Render(dummy)
        <HTML Dummy>
-> ComponentDidMount
    <API Call>
    <this.setState> -> with this.setState state variable is updated
-----This Finishes our Mounting Cycle-----

-------Update------
-> Render(Api_data) -> renders with api data
        <HTML (new ApI Data)>
->ComponenDidUpdate
