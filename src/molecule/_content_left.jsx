import React from 'react';
import ContentText from '../atoms/_content_text';
import ContentButton from "../atoms/_content_button";

function letStart(props) {
    return (
        <div>
            <section>
                <ContentText />
                <ContentButton buttonText="Accéder aux quizz"/>
            </section>
        </div>
    )
}

export default letStart;