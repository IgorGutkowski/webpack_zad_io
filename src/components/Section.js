import React from 'react';

const Section = ({ browsers }) => (
    <section>
        {browsers.map((browser) => (
            <article>
                <h3>{browser.browserName}</h3>
                <img src={browser.logoLink}
                     alt={`${browser.browserName} Logo`}
                     width={"100px"}
                     height={"100px"}
                />
                <p>{browser.description}</p>
            </article>
        ))}
    </section>
);

export default Section;
