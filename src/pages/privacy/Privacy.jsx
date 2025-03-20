import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import Download from "../../components/Download/Download";

function Privacy() {
  return (
    <Container className="mt-5 pt-5">
      <h1 className="text-center fw-bold">Policies</h1>
      <Card className="my-5">
        <Card.Body>
          <div>
            At AlwaysSource, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you use our mobile application and services.
          </div>

          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. Acceptance of Terms</Accordion.Header>
              <Accordion.Body>
                By accessing or using the AlwaysSource application, you agree to
                be bound by these Terms of Service and all applicable laws and
                regulations. If you do not agree with any part of these terms,
                you may not use our services.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header> 2. Use of Service</Accordion.Header>
              <Accordion.Body>
                You must be at least 18 years old to use AlwaysSource. You are
                responsible for maintaining the confidentiality of your account
                and password. You agree to accept responsibility for all
                activities that occur under your account.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header> 3. User Content</Accordion.Header>
              <Accordion.Body>
                You retain all rights to any content you submit, post or display
                on or through AlwaysSource. By posting content, you grant
                AlwaysSource a worldwide, non-exclusive, royalty-free license to
                use, reproduce, and distribute such content in connection with
                the service.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>4. Prohibited Activities</Accordion.Header>
              <Accordion.Body>
                You agree not to engage in any of the following prohibited
                activities: (1) copying, distributing, or disclosing any part of
                the service in any medium; (2) using any automated system to
                access the service; (3) transmitting spam, chain letters, or
                other unsolicited email; (4) attempting to interfere with or
                compromise the system integrity or security of AlwaysSource.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>5. Termination</Accordion.Header>
              <Accordion.Body>
                We may terminate or suspend your account and bar access to the
                service immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever and without
                limitation, including but not limited to a breach of the Terms.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>6. Limitation of Liability</Accordion.Header>
              <Accordion.Body>
                In no event shall AlwaysSource, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                access to or use of or inability to access or use the service.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>7. Changes to Terms</Accordion.Header>
              <Accordion.Body>
                We reserve the right to modify or replace these Terms at any
                time. It is your responsibility to check the Terms periodically
                for changes. Your continued use of the service following the
                posting of any changes to the Terms constitutes acceptance of
                those changes.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>8. Contact Us</Accordion.Header>
              <Accordion.Body>
                If you have any questions about these Terms, please contact us
                at terms@alwayssource.com
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
      <Download />
    </Container>
  );
}

export default Privacy;
