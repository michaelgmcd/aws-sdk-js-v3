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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CertificateMessage, DescribeCertificatesMessage } from "../models/models_0";
import { de_DescribeCertificatesCommand, se_DescribeCertificatesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificatesCommand}.
 */
export interface DescribeCertificatesCommandInput extends DescribeCertificatesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCertificatesCommand}.
 */
export interface DescribeCertificatesCommandOutput extends CertificateMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeCertificatesCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeCertificatesCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // DescribeCertificatesMessage
 *   CertificateIdentifier: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // CertificateMessage
 * //   Certificates: [ // CertificateList
 * //     { // Certificate
 * //       CertificateIdentifier: "STRING_VALUE",
 * //       CertificateType: "STRING_VALUE",
 * //       Thumbprint: "STRING_VALUE",
 * //       ValidFrom: new Date("TIMESTAMP"),
 * //       ValidTill: new Date("TIMESTAMP"),
 * //       CertificateArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCertificatesCommandInput - {@link DescribeCertificatesCommandInput}
 * @returns {@link DescribeCertificatesCommandOutput}
 * @see {@link DescribeCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificatesCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link CertificateNotFoundFault} (client fault)
 *  <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an existing certificate. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 */
export class DescribeCertificatesCommand extends $Command<
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
  DocDBClientResolvedConfig
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
  constructor(readonly input: DescribeCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribeCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeCertificates",
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
  private serialize(input: DescribeCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCertificatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCertificatesCommandOutput> {
    return de_DescribeCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
