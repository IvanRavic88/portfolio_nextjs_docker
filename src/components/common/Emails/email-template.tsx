import {
  Head,
  Body,
  Html,
  Tailwind,
  Container,
  Heading,
  Text,
  Section,
  Row,
  Column,
  Button,
  Hr,
  Preview,
} from '@react-email/components';

interface EmailTemplateProps {
  senderName: string;
  senderEmail: string;
  whatServicesNeeded: string;
  senderMessage: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  senderEmail,
  senderMessage,
  senderName,
  whatServicesNeeded,
}) => {
  return (
    <Html>
      <Head />
      <Preview>{`New inquiry from ${senderName} - ${whatServicesNeeded}`}</Preview>
      <Tailwind>
        <Body className="bg-[#f4f4f5] py-10 font-sans">
          <Container className="mx-auto max-w-[600px] overflow-hidden rounded-xl bg-white shadow-sm">
            {/* Header */}
            <Section className="bg-[#111414] px-8 py-7">
              <Text className="m-0 text-xs font-semibold uppercase tracking-widest text-[#bb2649]">
                New inquiry
              </Text>
              <Heading className="m-0 mt-1 text-2xl font-semibold text-white">
                {senderName}
              </Heading>
              <Text className="m-0 mt-1 text-sm text-gray-400">
                {senderEmail}
              </Text>
            </Section>

            {/* Body */}
            <Section className="px-8 py-8">
              <Row className="mb-6">
                <Column>
                  <Text className="m-0 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Services needed
                  </Text>
                  <Text className="m-0 mt-1 text-base text-gray-900">
                    {whatServicesNeeded}
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column>
                  <Text className="m-0 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Message
                  </Text>
                  <Text className="m-0 mt-1 whitespace-pre-line text-base leading-relaxed text-gray-900">
                    {senderMessage}
                  </Text>
                </Column>
              </Row>

              <Section className="mt-8">
                <Button
                  href={`mailto:${senderEmail}?subject=Re: your inquiry`}
                  className="rounded-full bg-[#bb2649] px-6 py-3 text-sm font-semibold text-white"
                >
                  Reply to {senderName}
                </Button>
              </Section>
            </Section>

            <Hr className="m-0 border-gray-200" />

            {/* Footer */}
            <Section className="px-8 py-6">
              <Text className="m-0 text-center text-xs text-gray-400">
                Sent from the contact form on ivanravic.com
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
