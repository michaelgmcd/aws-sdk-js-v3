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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { ListModelManifestNodesRequest, ListModelManifestNodesResponse } from "../models/models_0";
import { de_ListModelManifestNodesCommand, se_ListModelManifestNodesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListModelManifestNodesCommand}.
 */
export interface ListModelManifestNodesCommandInput extends ListModelManifestNodesRequest {}
/**
 * @public
 *
 * The output of {@link ListModelManifestNodesCommand}.
 */
export interface ListModelManifestNodesCommandOutput extends ListModelManifestNodesResponse, __MetadataBearer {}

/**
 * @public
 * <p> Lists information about nodes specified in a vehicle model (model manifest). </p>
 *         <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListModelManifestNodesCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListModelManifestNodesCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListModelManifestNodesRequest
 *   name: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListModelManifestNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListModelManifestNodesResponse
 * //   nodes: [ // Nodes
 * //     { // Node Union: only one key present
 * //       branch: { // Branch
 * //         fullyQualifiedName: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         deprecationMessage: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //       },
 * //       sensor: { // Sensor
 * //         fullyQualifiedName: "STRING_VALUE", // required
 * //         dataType: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         unit: "STRING_VALUE",
 * //         allowedValues: [ // listOfStrings
 * //           "STRING_VALUE",
 * //         ],
 * //         min: Number("double"),
 * //         max: Number("double"),
 * //         deprecationMessage: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //       },
 * //       actuator: { // Actuator
 * //         fullyQualifiedName: "STRING_VALUE", // required
 * //         dataType: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         unit: "STRING_VALUE",
 * //         allowedValues: [
 * //           "STRING_VALUE",
 * //         ],
 * //         min: Number("double"),
 * //         max: Number("double"),
 * //         assignedValue: "STRING_VALUE",
 * //         deprecationMessage: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //       },
 * //       attribute: { // Attribute
 * //         fullyQualifiedName: "STRING_VALUE", // required
 * //         dataType: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         unit: "STRING_VALUE",
 * //         allowedValues: [
 * //           "STRING_VALUE",
 * //         ],
 * //         min: Number("double"),
 * //         max: Number("double"),
 * //         assignedValue: "STRING_VALUE",
 * //         defaultValue: "STRING_VALUE",
 * //         deprecationMessage: "STRING_VALUE",
 * //         comment: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelManifestNodesCommandInput - {@link ListModelManifestNodesCommandInput}
 * @returns {@link ListModelManifestNodesCommandOutput}
 * @see {@link ListModelManifestNodesCommandInput} for command's `input` shape.
 * @see {@link ListModelManifestNodesCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service quota was exceeded. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 */
export class ListModelManifestNodesCommand extends $Command<
  ListModelManifestNodesCommandInput,
  ListModelManifestNodesCommandOutput,
  IoTFleetWiseClientResolvedConfig
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
  constructor(readonly input: ListModelManifestNodesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListModelManifestNodesCommandInput, ListModelManifestNodesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListModelManifestNodesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "ListModelManifestNodesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTAutobahnControlPlane",
        operation: "ListModelManifestNodes",
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
  private serialize(input: ListModelManifestNodesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListModelManifestNodesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListModelManifestNodesCommandOutput> {
    return de_ListModelManifestNodesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
