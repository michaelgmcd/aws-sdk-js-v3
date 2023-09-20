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

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetGrantRequest, GetGrantResponse } from "../models/models_0";
import { de_GetGrantCommand, se_GetGrantCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGrantCommand}.
 */
export interface GetGrantCommandInput extends GetGrantRequest {}
/**
 * @public
 *
 * The output of {@link GetGrantCommand}.
 */
export interface GetGrantCommandOutput extends GetGrantResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets detailed information about the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // GetGrantRequest
 *   GrantArn: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new GetGrantCommand(input);
 * const response = await client.send(command);
 * // { // GetGrantResponse
 * //   Grant: { // Grant
 * //     GrantArn: "STRING_VALUE", // required
 * //     GrantName: "STRING_VALUE", // required
 * //     ParentArn: "STRING_VALUE", // required
 * //     LicenseArn: "STRING_VALUE", // required
 * //     GranteePrincipalArn: "STRING_VALUE", // required
 * //     HomeRegion: "STRING_VALUE", // required
 * //     GrantStatus: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "PENDING_DELETE" || "DISABLED" || "WORKFLOW_COMPLETED", // required
 * //     StatusReason: "STRING_VALUE",
 * //     Version: "STRING_VALUE", // required
 * //     GrantedOperations: [ // AllowedOperationList // required
 * //       "CreateGrant" || "CheckoutLicense" || "CheckoutBorrowLicense" || "CheckInLicense" || "ExtendConsumptionLicense" || "ListPurchasedLicenses" || "CreateToken",
 * //     ],
 * //     Options: { // Options
 * //       ActivationOverrideBehavior: "DISTRIBUTED_GRANTS_ONLY" || "ALL_GRANTS_PERMITTED_BY_ISSUER",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGrantCommandInput - {@link GetGrantCommandInput}
 * @returns {@link GetGrantCommandOutput}
 * @see {@link GetGrantCommandInput} for command's `input` shape.
 * @see {@link GetGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 */
export class GetGrantCommand extends $Command<
  GetGrantCommandInput,
  GetGrantCommandOutput,
  LicenseManagerClientResolvedConfig
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
  constructor(readonly input: GetGrantCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGrantCommandInput, GetGrantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetGrantCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "GetGrantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLicenseManager",
        operation: "GetGrant",
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
  private serialize(input: GetGrantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetGrantCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGrantCommandOutput> {
    return de_GetGrantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
