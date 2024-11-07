import { Static, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { Strip } from "../../common/core.types.tmp.js";
import { AccountIdParamSchema } from "../../common/query-parameters.type.js";
import { MessageDraftAttachment } from "../messages/ressource.types.js";

// --------------------------------------------------------------------------
// REQUEST
// --------------------------------------------------------------------------

/**
 *
 */
export const ChatStartLinkedinSalesExtrasSchema = Type.Object(
  {
    api: Type.Literal("sales_navigator", {
      description:
        "The Linkedin API that should be used to start chatting (relative features must be subscribed).",
    }),
  },
  { description: "Sales Navigator Linkedin fields" }
);

/**
 *
 */
export const ChatStartLinkedinClassicExtrasSchema = Type.Object(
  {
    api: Type.Optional(
      Type.Literal("classic", {
        description:
          "The Linkedin API that should be used to start chatting (relative feature must be subscribed). Default is classic.",
      })
    ),
    inmail: Type.Optional(
      Type.Boolean({
        description:
          "If set to true, start the new conversation with an inMail.",
      })
    ),
  },
  { description: "Standard Linkedin fields" }
);

/**
 *
 */
export const ChatStartLinkedinRecruiterExtrasSchema = Type.Object(
  {
    api: Type.Literal("recruiter", {
      description:
        "The Linkedin API that should be used to start chatting (relative feature must be subscribed).",
    }),
    signature: Type.Optional(
      Type.String({
        description: "The signature of the sender",
      })
    ),
    hiring_project_id: Type.Optional(
      Type.String({
        description: "The ID of the project the chat should be started in",
      })
    ),
    email_address: Type.Optional(
      Type.String({
        description:
          "The email address of the recipient in case the chat should be started with email instead of inMail",
      })
    ),
  },
  { description: "Recruiter Linkedin fields" }
);

/**
 *
 */
export const ChatStartBodySchema = Type.Object({
  account_id: AccountIdParamSchema,
  text: Type.Optional(
    Type.String({
      description: "The message that will start the new conversation.",
    })
  ),
  attachments: Type.Optional(Type.Array(Type.String({ format: "binary" }))),
  voice_message: Type.Optional(
    Type.String({
      format: "binary",
      description: "For Linkedin messaging only.",
    })
  ),
  attendees_ids: Type.Array(Type.String(), {
    description: "One or more attendee provider’id.",
    minItems: 1,
  }),
  subject: Type.Optional(
    Type.String({
      description: "An optional field to set the subject of the conversation.",
    })
  ),
  linkedin: Type.Optional(
    Type.Union(
      [
        ChatStartLinkedinClassicExtrasSchema,
        ChatStartLinkedinRecruiterExtrasSchema,
        ChatStartLinkedinSalesExtrasSchema,
      ],
      {
        description: "Extra fields for Linkedin products",
      }
    )
  ),
});

export type ChatStartBody = Static<typeof ChatStartBodySchema>;

// /**
//  *
//  */
// export const getChatStartBodyOpenApiSchema =
//   makeOpenApiSchemaGetter(ChatStartBodySchema);

/**
 *
 */
export const ChatStartBodyValidator = TypeCompiler.Compile(ChatStartBodySchema);

export type ChatStartDTO = Strip<
  ChatStartBody,
  "attachments" | "voice_message" | "linkedin"
> & {
  attachments?: MessageDraftAttachment[];
  voice_message?: MessageDraftAttachment;
  options?:
    | Static<typeof ChatStartLinkedinClassicExtrasSchema>
    | Static<typeof ChatStartLinkedinRecruiterExtrasSchema>
    | Static<typeof ChatStartLinkedinSalesExtrasSchema>
    | undefined;
};

// --------------------------------------------------------------------------
// RESPONSE
// --------------------------------------------------------------------------

export const ChatStartedApiResponseSchema = Type.Object({
  object: Type.Literal("ChatStarted"),
  chat_id: Type.Union([Type.String(), Type.Null()], {
    description: "The Unipile ID of the newly started chat.",
  }),
  message_id: Type.Union([Type.String(), Type.Null()], {
    description: "The Unipile ID of the message the chat started with.",
  }),
});

export type ChatStartedApiResponse = Static<
  typeof ChatStartedApiResponseSchema
>;

// /**
//  *
//  */
// export const getChatStartedResponseOpenApiSchema = makeOpenApiSchemaGetter(
//   ChatStartedApiResponseSchema
// );



/**  */
export const ChatStartedApiResponseValidator = TypeCompiler.Compile(ChatStartedApiResponseSchema);