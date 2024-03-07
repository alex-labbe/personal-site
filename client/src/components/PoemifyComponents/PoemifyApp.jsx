/*import Login from "./Login";
import PoemifyHome from "./PoemifyHome";

const code = new URLSearchParams(window.location.search).get("code");

export default function PoemifyApp() {
    return (
        <h1>Home</h1>
    )
  //return code ? <PoemifyHome code={code} /> : <Login />;
}*/
import Login from "./Login";
import PoemifyHome from "./PoemifyHome";
const code = new URLSearchParams(window.location.search).get("code");
function PoemifyApp() {
    console.log(code)
    return (
        <>
            <h1>Poemify</h1>
            {code ? <PoemifyHome code={code} /> : <Login />}
            <div className="statement">
                <p>this is poemify, (poem-spotify), the first project i made with a front-end and a back-end, and my first experience with react and javascript. i had somewhat learned to use the spotify api with a discord bot i had made that would my currently playing song to a playlist. the bot worked well but it was simply faster to do it on my phone. i made this during my 2023 summer, the hardest part absolutely being the user authentication flow, but it works well and i am happy. i lost a lot of steam right around i had the functionality all figured out, and when all i had to do then was make it look nice. i have since learned how to design a web app's backend much better, and i was super happy to be able to integrate it into my personal website, which was a major goal of mine. i hope you can try it out and get a nice poem written to you by gpt.</p>
            </div>

        </>
    )
}

export default PoemifyApp
