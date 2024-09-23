import {
  Head,
  Body,
  Html,
  Tailwind,
  Container,
  Heading,
  Text,
  Section,
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
      <Tailwind>
        <Body className="bg-gray-100">
          <Container className="mx-auto my-10 max-w-2xl rounded-lg bg-white p-8 shadow-lg">
            {/* Header */}
            <Heading className="mb-6 text-center text-3xl font-semibold text-gray-900">
              New Client Inquiry
            </Heading>

            {/* Email Content Section */}
            <Section className="mb-8 text-gray-800">
              <Text className="mb-4 text-lg">
                <strong className="text-gray-900">Name:</strong> {senderName}
              </Text>
              <Text className="mb-4 text-lg">
                <strong className="text-gray-900">Email:</strong> {senderEmail}
              </Text>
              <Text className="mb-4 text-lg">
                <strong className="text-gray-900">Services Needed:</strong>{' '}
                {whatServicesNeeded}
              </Text>
              <Text className="mb-4 text-lg">
                <strong className="text-gray-900">Message:</strong>
                <br />
                {senderMessage}
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-300 pt-6">
              <Text className="text-center text-sm text-gray-600">
                This email was sent from the contact form on portfolio website.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
