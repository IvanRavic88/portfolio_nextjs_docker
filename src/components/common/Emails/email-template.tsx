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
    <div>
      <div>
        <h1>Sender Name: {senderName}</h1>
        <h2>Sender Email: {senderEmail}</h2>
        <h3>Services Needed: {whatServicesNeeded}</h3>
        <p>Message: {senderMessage}</p>
      </div>
    </div>
  );
};
