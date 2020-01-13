import React from "react";

function Navbar({score, topScore} {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <span className="text-white">Clicky Game</span>
            <span className="text-white">Score: {score} | Top Score: {topScore}</span>
        </nav>
    )
})

export default Navbar;