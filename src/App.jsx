import Accordion from "./components/Accordion/Accordion";
//import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className="accordion">
          <Accordion.Item className="accordion-item">
            <Accordion.Title className="accordion-item-title" id="experience">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content
              className="accordion-item-content"
              id="experience"
            >
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="accordion-item">
            <Accordion.Title id="local-guides" className="accordion-item-title">
              We are working with local guides
            </Accordion.Title>
            <Accordion.Content
              id="local-guides"
              className="accordion-item-content"
            >
              <article>
                <p>We are not doing this alone from our office.</p>
                <p>Instead we are working with local guides.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
