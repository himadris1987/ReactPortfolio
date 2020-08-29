import React from "react";
import Container from "../Components/Container";
import Section from "../Components/Section";
import Projects from "../Components/Projects"

function Portfolio() {
    return (
        <Container>
            <h1 className="h1Portfolio">Portfolio</h1>
            <Section>
                <Projects/>
            </Section>
        </Container>
    )
}

export default Portfolio;