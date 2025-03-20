import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import Download from "../../components/Download/Download";

function FAQ() {
  return (
    <Container className="mt-5 pt-5">
      <h1 className="text-center fw-bold">Frequently Asked Questions</h1>
      <Card className="my-5">
        <Card.Body>
          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Always Source?</Accordion.Header>
              <Accordion.Body>
                AlwaysSource is a marketplace app that connects people looking
                for work with those who have job requirements. It allows users
                to post their needs and browse through available opportunities.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="1">
              <Accordion.Header>How do I find services?</Accordion.Header>
              <Accordion.Body>
                To post a requirement, open the AlwaysSource app, click on the
                'Post Requirement' button, fill in the details of your job or
                service need, and submit. It's that simple!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How do I find services?</Accordion.Header>
              <Accordion.Body>
                To post a requirement, open the AlwaysSource app, click on the
                'Post Requirement' button, fill in the details of your job or
                service need, and submit. It's that simple!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>What are Zings?</Accordion.Header>
              <Accordion.Body>
                Zings are the in-app currency used in AlwaysSource. You can
                purchase Zings with real money and use them to unlock contact
                details of potential clients or service providers.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                How do I unlock contact details?
              </Accordion.Header>
              <Accordion.Body>
                When you find a suitable job posting or applicant, you can use
                your Zings to unlock their contact details. Simply click on the
                'Unlock' button and confirm the Zing payment.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Is my personal information safe?
              </Accordion.Header>
              <Accordion.Body>
                Yes, we take user privacy very seriously. Your personal
                information is encrypted and securely stored. We only reveal
                your contact details to users who have paid with Zings to unlock
                them.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Can I use AlwaysSource on my computer?
              </Accordion.Header>
              <Accordion.Body>
                AlwaysSource is primarily a mobile app available for iOS and
                Android devices. While we don't have a desktop version, you can
                access some features through our website.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                How can I report a problem or suspicious activity?
              </Accordion.Header>
              <Accordion.Body>
                If you encounter any issues or suspicious activity, please use
                the 'Report' feature within the app or contact our support team
                through the app's help section.{" "}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
      <Download />
    </Container>
  );
}

export default FAQ;
