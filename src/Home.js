import React from "react";
import {Link} from"react-router-dom";

export default function Home() {
    return (
        <section class="links-container">
            <Link href="login">Login</Link>
            <br />
            <br />
            <Link href="registration">Registration</Link>
        </section>
    );
}

export function House() {
    return (
        <section class="links-container">
            <Link href="login">Login</Link>
            <br />
            <br />
            <Link href="registration">Registration</Link>
        </section>
    );
}