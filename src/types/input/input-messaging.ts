import { MessagingProvider } from '../client.js';

export type GetAllChatsInput = {
  before?: string;
  after?: string;
  limit?: number;
  account_type?: MessagingProvider;
  account_id?: string;
  cursor?: string;
  unread?: boolean;
};

export type GetAllMessagesInput = {
  before?: string;
  after?: string;
  limit?: number;
  sender_id?: string;
  account_id?: string;
  cursor?: string;
};

export type GetAllMessagesFromChatInput = {
  chat_id: string;
  cursor?: string;
  before?: string;
  after?: string;
  limit?: number;
  sender_id?: string;
};

export type GetAllMessagesFromAttendeeInput = {
  attendee_id: string;
  cursor?: string;
  before?: string;
  after?: string;
  limit?: number;
};

export type GetAllChatsFromAttendeeInput = {
  attendee_id: string;
  cursor?: string;
  before?: string;
  after?: string;
  limit?: number;
  account_id?: string;
};

export type PostMessageInput = {
  chat_id: string;
  text: string;
  thread_id?: string;
  attachments?: Array<[string, Buffer]>;
};

type LinkedinClassicPostNewChatInputOptions = {
  api?: 'classic';
  inmail?: boolean;
};

type LinkedinSalesPostNewChatInputOptions = {
  api: 'sales_navigator';
}

type LinkedinRecruiterPostNewChatInputOptions = {
  api: 'recruiter';
  signature?: string;
  hiring_project_id?: string;
  email_address?: string;
};

type LinkedinPostNewChatOptions = LinkedinClassicPostNewChatInputOptions | LinkedinSalesPostNewChatInputOptions | LinkedinRecruiterPostNewChatInputOptions;

type PostNewChatInputOptions = {
  linkedin?: LinkedinPostNewChatOptions;
};

export type PostNewChatInput = {
  account_id: string;
  text: string;
  attendees_ids: string[];
  subject?: string;
  attachments?: Array<[string, Buffer]>;
  options?: PostNewChatInputOptions
};

export type GetMessageAttachementInput = {
  message_id: string;
  attachment_id: string;
};

export type GetAllAttendeesInput = {
  cursor?: string;
  limit?: number;
  account_id?: string;
};

export type PerformActionInput = {
  chat_id: string;
  action: 'setReadStatus';
  value: boolean;
};

export function isLinkedinClassicPostNewChatInputOptions(options: LinkedinPostNewChatOptions): options is LinkedinClassicPostNewChatInputOptions {
  return options.api === 'classic' && options.inmail !== undefined;
}

export function isLinkedinRecruiterPostNewChatInputOptions(options: LinkedinPostNewChatOptions): options is LinkedinRecruiterPostNewChatInputOptions {
  return options.api === 'recruiter';
}