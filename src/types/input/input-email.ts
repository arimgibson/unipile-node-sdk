export type GetAllEmailsInput = {
  account_id?: string;
  role?: string;
  folder?: string;
  from?: string;
  to?: string;
  any_email?: string;
  before?: string;
  after?: string;
  limit?: number;
  cursor?: string;
};

export type UpdateEmailInput = {
  email_id: string;
  folders?: string[];
  unread?: boolean;
};

export type UpdateEmailByProviderIdInput = {
  email_provider_id: string;
  account_id: string;
  folders?: string[];
  unread?: boolean;
};

export type GetAllFoldersInput = {
  account_id?: string;
};

type MailAttendee = { display_name?: string; identifier: string };

export type SendEmailInput = {
  account_id: string;
  to: MailAttendee[];
  cc?: MailAttendee[];
  bcc?: MailAttendee[];
  from?: MailAttendee;
  subject?: string;
  draft_id?: string;
  body: string;
  attachments?: Array<[string, Buffer]>;
  custom_headers?: Array<{ name: string; value: string }>;
  tracking_options?: {
    opens?: boolean;
    links?: boolean;
    label?: string;
  }
};

export type GetEmailAttachmentInput = {
  email_id: string;
  attachment_id: string;
};

export type GetEmailAttachmentByProviderIdInput = {
  email_provider_id: string;
  attachment_id: string;
  account_id: string;
};
