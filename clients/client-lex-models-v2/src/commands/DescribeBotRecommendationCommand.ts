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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import {
  DescribeBotRecommendationRequest,
  DescribeBotRecommendationResponse,
  DescribeBotRecommendationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeBotRecommendationCommand, se_DescribeBotRecommendationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBotRecommendationCommand}.
 */
export interface DescribeBotRecommendationCommandInput extends DescribeBotRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBotRecommendationCommand}.
 */
export interface DescribeBotRecommendationCommandOutput extends DescribeBotRecommendationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides metadata information about a bot recommendation. This
 *          information will enable you to get a description on the request inputs,
 *          to download associated transcripts after processing is complete, and to
 *          download intents and slot-types generated by the bot
 *          recommendation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotRecommendationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotRecommendationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeBotRecommendationRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   botRecommendationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBotRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBotRecommendationResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botRecommendationStatus: "Processing" || "Deleting" || "Deleted" || "Downloading" || "Updating" || "Available" || "Failed" || "Stopping" || "Stopped",
 * //   botRecommendationId: "STRING_VALUE",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   transcriptSourceSetting: { // TranscriptSourceSetting
 * //     s3BucketTranscriptSource: { // S3BucketTranscriptSource
 * //       s3BucketName: "STRING_VALUE", // required
 * //       pathFormat: { // PathFormat
 * //         objectPrefixes: [ // ObjectPrefixes
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       transcriptFormat: "Lex", // required
 * //       transcriptFilter: { // TranscriptFilter
 * //         lexTranscriptFilter: { // LexTranscriptFilter
 * //           dateRangeFilter: { // DateRangeFilter
 * //             startDateTime: new Date("TIMESTAMP"), // required
 * //             endDateTime: new Date("TIMESTAMP"), // required
 * //           },
 * //         },
 * //       },
 * //       kmsKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   encryptionSetting: { // EncryptionSetting
 * //     kmsKeyArn: "STRING_VALUE",
 * //     botLocaleExportPassword: "STRING_VALUE",
 * //     associatedTranscriptsPassword: "STRING_VALUE",
 * //   },
 * //   botRecommendationResults: { // BotRecommendationResults
 * //     botLocaleExportUrl: "STRING_VALUE",
 * //     associatedTranscriptsUrl: "STRING_VALUE",
 * //     statistics: { // BotRecommendationResultStatistics
 * //       intents: { // IntentStatistics
 * //         discoveredIntentCount: Number("int"),
 * //       },
 * //       slotTypes: { // SlotTypeStatistics
 * //         discoveredSlotTypeCount: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBotRecommendationCommandInput - {@link DescribeBotRecommendationCommandInput}
 * @returns {@link DescribeBotRecommendationCommandOutput}
 * @see {@link DescribeBotRecommendationCommandInput} for command's `input` shape.
 * @see {@link DescribeBotRecommendationCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class DescribeBotRecommendationCommand extends $Command<
  DescribeBotRecommendationCommandInput,
  DescribeBotRecommendationCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: DescribeBotRecommendationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBotRecommendationCommandInput, DescribeBotRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBotRecommendationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DescribeBotRecommendationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeBotRecommendationResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "LexModelBuildingServiceV2",
        operation: "DescribeBotRecommendation",
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
  private serialize(input: DescribeBotRecommendationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBotRecommendationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBotRecommendationCommandOutput> {
    return de_DescribeBotRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
