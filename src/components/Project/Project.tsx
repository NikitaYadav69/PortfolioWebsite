import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import DownloadApp from "../../assets/download.png";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Artificial Intelligence(AI) image generator.</h3>
              <p>
                This app can make image from given text with the help of AI tools,the given text is called a prompt.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Shopify</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://velocityai.vinayaksingh.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio Website</h3>
              <p>
                This website is my personal portfolio,it has all professitional information about me like my education, cources,internship,projects and contact details
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


          <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://madewithluv.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Artificial Inteligence(AI) music generator</h3>
              <p>
                This app can generate music from the inputed text with the help AI tools.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
             
              </ul>
            </footer>
          </div>
          </ScrollAnimation>

{/* <ScrollAnimation animateIn="flipInX">
  <div className="project">
    <header>
      <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
      <div className="project-links">
        <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
          <img src={externalLink} alt="Visit site" />
        </a>
      </div>
    </header>
    <div className="body">
      <h3>SmartCorners - Real Estate Properties Site</h3>
      <p>
      This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>Wordpress</li>               
      </ul>
    </footer>
  </div>
</ScrollAnimation> */}

        

        

        
        
      </div>
    </Container>
  );
}
