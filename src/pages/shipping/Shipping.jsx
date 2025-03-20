import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import Download from "../../components/Download/Download";

function ShippingAndDelivery() {
  return (
    <Container className="mt-5 pt-5">
      <h1 className="text-center fw-bold">Shipping & Delivery</h1>
      <Card className="my-5">
        <Card.Body>
          <div>
            As AlwaysSource is a digital platform connecting service providers
            and clients, we do not directly handle physical shipping or delivery
            of goods. However, this policy outlines our guidelines for service
            delivery and digital content access.
          </div>

          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header> 1. Digital Content Delivery</Accordion.Header>
              <Accordion.Body>
                Upon successful purchase of Zings or any other digital content,
                access will be granted immediately to your AlwaysSource account.
                In case of any delays or issues, please contact our support
                team.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="1">
              <Accordion.Header> 2. Service Delivery</Accordion.Header>
              <Accordion.Body>
                AlwaysSource facilitates connections between service providers
                and clients. The actual delivery of services is subject to the
                terms agreed upon between the service provider and the client.
                AlwaysSource is not responsible for the actual delivery of
                services arranged through our platform.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header> 3. Timeframes</Accordion.Header>
              <Accordion.Body>
                While we strive to ensure immediate access to digital content
                and prompt connections between users, please allow up to 24
                hours for any issues to be resolved by our support team.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>4. User Responsibilities</Accordion.Header>
              <Accordion.Body>
                Users are responsible for accurately providing and verifying
                contact information to ensure smooth communication and service
                delivery between parties.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>5. International Usage</Accordion.Header>
              <Accordion.Body>
                AlwaysSource is available internationally. However, users should
                be aware of and comply with any local regulations regarding
                online services and digital purchases.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>6. Technical Requirements</Accordion.Header>
              <Accordion.Body>
                Users are responsible for ensuring they have the necessary
                technical requirements (internet connection, compatible device,
                etc.) to access and use the AlwaysSource platform and any
                arranged services.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>7. Changes to this Policy</Accordion.Header>
              <Accordion.Body>
                We may update this Shipping & Delivery Policy from time to time.
                Any changes will be posted on this page with a revised effective
                date.
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

export default ShippingAndDelivery;
