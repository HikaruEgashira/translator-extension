import {
  type BasePromptElementProps,
  PromptElement,
  type PromptSizing,
  UserMessage,
  AssistantMessage,
} from "@vscode/prompt-tsx";

export interface PromptProps extends BasePromptElementProps {
  userQuery: string;
}

// https://prompts.chat/#act-as-an-english-translator-and-improver
// https://chatgpt.com/g/g-67302c5d1bc48190955d7dc8c35897fd-translator
const actAsAnEnglishTranslatorAndImprover = `
I want you to act as an English translator, spelling corrector and improver.
I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English.
I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences.
Keep the meaning same, but make them more literary.
Add the Japanese free translation at the end of each response.
I want you to only reply the correction, the improvements and nothing else, do not write explanations.
`

export class TranslatePrompt extends PromptElement<PromptProps, void> {
  render(_state: undefined, _sizing: PromptSizing) {
    return (
      <>
        <AssistantMessage>
          ${actAsAnEnglishTranslatorAndImprover}
        </AssistantMessage>
        <UserMessage>{this.props.userQuery}</UserMessage>
      </>
    );
  }
}
