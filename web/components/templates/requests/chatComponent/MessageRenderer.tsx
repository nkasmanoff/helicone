import React from "react";

import { MessageGroup } from "./MessageGroup";
import { PartialMessages } from "./ParitalMessage";
import { Message } from "./types";

interface MessageRendererProps {
  messages: Message[];
  showAllMessages: boolean;
  expandedChildren: Record<string, boolean>;
  setExpandedChildren: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  selectedProperties?: Record<string, string>;
  isHeliconeTemplate?: boolean;
  autoInputs?: any[];
  setShowAllMessages: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MessageRenderer: React.FC<MessageRendererProps> = ({
  messages,
  showAllMessages,
  expandedChildren,
  setExpandedChildren,
  selectedProperties,
  isHeliconeTemplate,
  autoInputs,
  setShowAllMessages,
}) => {
  if (!showAllMessages && messages.length >= 10) {
    return (
      <PartialMessages
        messages={messages}
        expandedChildren={expandedChildren}
        setExpandedChildren={setExpandedChildren}
        selectedProperties={selectedProperties}
        isHeliconeTemplate={isHeliconeTemplate}
        autoInputs={autoInputs}
        setShowAllMessages={setShowAllMessages}
      />
    );
  }

  if (messages.length > 0) {
    return (
      <MessageGroup
        messages={messages}
        expandedChildren={expandedChildren}
        setExpandedChildren={setExpandedChildren}
        selectedProperties={selectedProperties}
        isHeliconeTemplate={isHeliconeTemplate}
        autoInputs={autoInputs}
      />
    );
  }

  return null;
};