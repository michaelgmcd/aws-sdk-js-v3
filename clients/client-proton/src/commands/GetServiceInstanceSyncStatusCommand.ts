// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetServiceInstanceSyncStatusInput, GetServiceInstanceSyncStatusOutput } from "../models/models_0";
import {
  de_GetServiceInstanceSyncStatusCommand,
  se_GetServiceInstanceSyncStatusCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetServiceInstanceSyncStatusCommand}.
 */
export interface GetServiceInstanceSyncStatusCommandInput extends GetServiceInstanceSyncStatusInput {}
/**
 * @public
 *
 * The output of {@link GetServiceInstanceSyncStatusCommand}.
 */
export interface GetServiceInstanceSyncStatusCommandOutput
  extends GetServiceInstanceSyncStatusOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Get the status of the synced service instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetServiceInstanceSyncStatusCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetServiceInstanceSyncStatusCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // GetServiceInstanceSyncStatusInput
 *   serviceName: "STRING_VALUE", // required
 *   serviceInstanceName: "STRING_VALUE", // required
 * };
 * const command = new GetServiceInstanceSyncStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceInstanceSyncStatusOutput
 * //   latestSync: { // ResourceSyncAttempt
 * //     initialRevision: { // Revision
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     targetRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     target: "STRING_VALUE", // required
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     events: [ // ResourceSyncEvents // required
 * //       { // ResourceSyncEvent
 * //         type: "STRING_VALUE", // required
 * //         externalId: "STRING_VALUE",
 * //         time: new Date("TIMESTAMP"), // required
 * //         event: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   latestSuccessfulSync: {
 * //     initialRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     targetRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     target: "STRING_VALUE", // required
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     events: [ // required
 * //       {
 * //         type: "STRING_VALUE", // required
 * //         externalId: "STRING_VALUE",
 * //         time: new Date("TIMESTAMP"), // required
 * //         event: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   desiredState: {
 * //     repositoryName: "STRING_VALUE", // required
 * //     repositoryProvider: "STRING_VALUE", // required
 * //     sha: "STRING_VALUE", // required
 * //     directory: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceInstanceSyncStatusCommandInput - {@link GetServiceInstanceSyncStatusCommandInput}
 * @returns {@link GetServiceInstanceSyncStatusCommandOutput}
 * @see {@link GetServiceInstanceSyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetServiceInstanceSyncStatusCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class GetServiceInstanceSyncStatusCommand extends $Command<
  GetServiceInstanceSyncStatusCommandInput,
  GetServiceInstanceSyncStatusCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetServiceInstanceSyncStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServiceInstanceSyncStatusCommandInput, GetServiceInstanceSyncStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServiceInstanceSyncStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetServiceInstanceSyncStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsProton20200720",
        operation: "GetServiceInstanceSyncStatus",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetServiceInstanceSyncStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetServiceInstanceSyncStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceInstanceSyncStatusCommandOutput> {
    return de_GetServiceInstanceSyncStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
