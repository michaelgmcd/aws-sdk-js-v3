// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Q in Connect is a generative AI customer service assistant. It is an LLM-enhanced evolution
 *       of Amazon Connect Wisdom that delivers real-time recommendations to help contact center
 *       agents resolve customer issues quickly and accurately.</p>
 *          <p>Amazon Q automatically detects customer intent during calls and chats using
 *       conversational analytics and natural language understanding (NLU). It then provides agents
 *       with immediate, real-time generative responses and suggested actions, and links to relevant
 *       documents and articles. Agents can also query Amazon Q directly using natural language or
 *       keywords to answer customer requests.</p>
 *          <p>Use the Amazon Q in Connect APIs to create an assistant and a knowledge base, for example, or
 *       manage content by uploading custom files.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html">Use Amazon Q in Connect for generative AI
 *         powered agent assistance in real-time</a> in the <i>Amazon Connect
 *         Administrator Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./QConnectClient";
export * from "./QConnect";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export { RuntimeExtension } from "./runtimeExtensions";
export { QConnectExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

import "@aws-sdk/util-endpoints";

export { QConnectServiceException } from "./models/QConnectServiceException";
