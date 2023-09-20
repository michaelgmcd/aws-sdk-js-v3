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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetDownloadUrlForLayerRequest, GetDownloadUrlForLayerResponse } from "../models/models_0";
import { de_GetDownloadUrlForLayerCommand, se_GetDownloadUrlForLayerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDownloadUrlForLayerCommand}.
 */
export interface GetDownloadUrlForLayerCommandInput extends GetDownloadUrlForLayerRequest {}
/**
 * @public
 *
 * The output of {@link GetDownloadUrlForLayerCommand}.
 */
export interface GetDownloadUrlForLayerCommandOutput extends GetDownloadUrlForLayerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can
 *             only get URLs for image layers that are referenced in an image.</p>
 *          <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer
 *             that is not already cached.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetDownloadUrlForLayerCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetDownloadUrlForLayerCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // GetDownloadUrlForLayerRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   layerDigest: "STRING_VALUE", // required
 * };
 * const command = new GetDownloadUrlForLayerCommand(input);
 * const response = await client.send(command);
 * // { // GetDownloadUrlForLayerResponse
 * //   downloadUrl: "STRING_VALUE",
 * //   layerDigest: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDownloadUrlForLayerCommandInput - {@link GetDownloadUrlForLayerCommandInput}
 * @returns {@link GetDownloadUrlForLayerCommandOutput}
 * @see {@link GetDownloadUrlForLayerCommandInput} for command's `input` shape.
 * @see {@link GetDownloadUrlForLayerCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link LayerInaccessibleException} (client fault)
 *  <p>The specified layer is not available because it is not associated with an image.
 *             Unassociated image layers may be cleaned up at any time.</p>
 *
 * @throws {@link LayersNotFoundException} (client fault)
 *  <p>The specified layers could not be found, or the specified layer is not valid for this
 *             repository.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 */
export class GetDownloadUrlForLayerCommand extends $Command<
  GetDownloadUrlForLayerCommandInput,
  GetDownloadUrlForLayerCommandOutput,
  ECRClientResolvedConfig
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
  constructor(readonly input: GetDownloadUrlForLayerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDownloadUrlForLayerCommandInput, GetDownloadUrlForLayerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDownloadUrlForLayerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "GetDownloadUrlForLayerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "GetDownloadUrlForLayer",
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
  private serialize(input: GetDownloadUrlForLayerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDownloadUrlForLayerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDownloadUrlForLayerCommandOutput> {
    return de_GetDownloadUrlForLayerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
