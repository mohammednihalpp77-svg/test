import { NavBar } from "./NavBar/navBar";
import { LandingPage } from "./LandingPage/LandingPage";
export function Display() {

    return (
        <>
            <div className=" flex flex-wrap w-full">

                {/* <div className="w-full">
                    <NavBar />
                </div> */}
                <div className="w-full">
                    <LandingPage/>
                </div>

            </div>
        </>
    )
}