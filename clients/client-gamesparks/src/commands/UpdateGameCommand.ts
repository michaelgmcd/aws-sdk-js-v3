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

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import { UpdateGameRequest, UpdateGameResult } from "../models/models_0";
import { de_UpdateGameCommand, se_UpdateGameCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateGameCommand}.
 */
export interface UpdateGameCommandInput extends UpdateGameRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGameCommand}.
 */
export interface UpdateGameCommandOutput extends UpdateGameResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates details of the game.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, UpdateGameCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, UpdateGameCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const input = { // UpdateGameRequest
 *   GameName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateGameCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGameResult
 * //   Game: { // GameDetails
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Created: new Date("TIMESTAMP"),
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     State: "STRING_VALUE",
 * //     EnableTerminationProtection: true || false,
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGameCommandInput - {@link UpdateGameCommandInput}
 * @returns {@link UpdateGameCommandOutput}
 * @see {@link UpdateGameCommandInput} for command's `input` shape.
 * @see {@link UpdateGameCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link GameSparksServiceException}
 * <p>Base exception class for all service exceptions from GameSparks service.</p>
 *
 */
export class UpdateGameCommand extends $Command<
  UpdateGameCommandInput,
  UpdateGameCommandOutput,
  GameSparksClientResolvedConfig
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
  constructor(readonly input: UpdateGameCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameSparksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGameCommandInput, UpdateGameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateGameCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "UpdateGameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameSparks",
        operation: "UpdateGame",
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
  private serialize(input: UpdateGameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateGameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGameCommandOutput> {
    return de_UpdateGameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
