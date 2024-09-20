import {
  Head,
  Body,
  Html,
  Tailwind,
  Container,
  Heading,
  Text,
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
          <Container className="rounded-lg bg-white p-8 shadow-lg">
            <Heading className="mx-auto my-12 text-center font-sans text-2xl font-bold text-blue-600">
              Hi! You have a new message from {senderName}
            </Heading>
            <Text className="text-lg text-gray-700">
              <strong>Email:</strong> {senderEmail}
            </Text>
            <Text className="pt-4 text-xl text-gray-800">
              <strong>Services needed:</strong> {whatServicesNeeded}
            </Text>
            <Text className="pt-4 text-lg text-gray-700">
              <strong>Message:</strong> {senderMessage}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
