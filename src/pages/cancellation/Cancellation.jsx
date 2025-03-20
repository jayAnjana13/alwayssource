import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import Download from "../../components/Download/Download";

function CancellationAndRefund() {
  return (
    <Container className="mt-5 pt-5">
      <h1 className="text-center fw-bold">Cancellation and Refund</h1>
      <Card className="my-5">
        <Card.Body>
          <div>
            At AlwaysSource, we strive to ensure fair and transparent policies
            regarding cancellations and refunds. This policy outlines the terms
            and conditions for cancellations and refunds related to our services
            and Zing purchases.
          </div>

          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. Zing Purchases</Accordion.Header>
              <Accordion.Body>
                Zings are non-refundable once purchased. However, if you
                encounter any issues with your Zing purchase, please contact our
                support team within 24 hours of the transaction, and we will
                work to resolve the issue.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                2. Unlocking Contact Information
              </Accordion.Header>
              <Accordion.Body>
                Once you have used Zings to unlock contact information, the
                transaction is final and non-refundable. Please ensure you
                review all available information before unlocking contact
                details.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header> 3. Job Postings</Accordion.Header>
              <Accordion.Body>
                If you need to cancel a job posting, you may do so at any time.
                However, any Zings used by other users to unlock your contact
                information cannot be refunded.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>4. Account Cancellation</Accordion.Header>
              <Accordion.Body>
                You may cancel your AlwaysSource account at any time. Upon
                cancellation, any remaining Zings in your account will be
                forfeited and cannot be refunded or transferred.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>5. Exceptional Circumstances</Accordion.Header>
              <Accordion.Body>
                In cases of technical errors, unauthorized transactions, or
                other exceptional circumstances, AlwaysSource reserves the right
                to issue refunds at its discretion. Each case will be reviewed
                individually.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>6. Refund Process</Accordion.Header>
              <Accordion.Body>
                If a refund is approved, it will be processed using the original
                method of payment. The time for the refund to appear in your
                account may vary depending on your payment provider.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>7. Changes to this Policy</Accordion.Header>
              <Accordion.Body>
                We may update this Cancellation & Refund Policy from time to
                time. Any changes will be posted on this page with a revised
                effective date.
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

export default CancellationAndRefund;
