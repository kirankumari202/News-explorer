import React from 'react';
import author from '../../images/author.jpg';
import { Section, Image, TextContent, Title, Paragraph } from './styledAbout';
export default function About() {
  return (
    <Section>
      <Image src={author} alt="Smiling Author" />
      <TextContent>
        <Title>About Me</Title>
        <Paragraph>
          Hey there, I'm Kiran Kumari. I am a full stack developer with experience building websites and web
          applications.
        </Paragraph>
        <Paragraph>
          I am a 3rd Year Student of Lovely Profesional University pursuing Computer Science and Engineering.
          My specialization is Web Development and currently i am working on the backend and some more skills like java and docker. 

        </Paragraph>
        {/* <Paragraph>
          These days my time is spent learning how to build and deploy beautiful websites. I've long
          been interested in the convergence of creativity and problem solving. I'm learning how to
          best occupy that space. I design and build websites that look good and solve problems.
        </Paragraph> */}
        {/* <Paragraph>
          When I'm not coding, you can find me making music, out hiking, and petting all the good
          dogs.
        </Paragraph> */}
      </TextContent>
    </Section>
  );
}
