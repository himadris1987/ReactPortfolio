import React from "react";
import Container from "../Components/Container";
import Section from "../Components/Section";
import Picture from "../Components/Picture";

function About (){
    return(
        <Container>
            <h1 className="h1about">About Me</h1>
            <Section>
            <Picture/>
            </Section>
        </Container>
    )
}

export default About;