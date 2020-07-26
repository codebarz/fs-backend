import { MailDataRequired } from '@sendgrid/helpers/classes/mail';

interface MailTemplate {
  from: string;
  to: string;
  templateData: Record<string, unknown>;
  templateId: string;
}

export default function generateMailTemplate(
  data: MailTemplate,
): MailDataRequired {
  const { from, to, templateData, templateId } = data;

  return {
    from,
    personalizations: [
      {
        to: [{ email: to }],
        dynamicTemplateData: templateData,
      },
    ],
    templateId,
  };
}
