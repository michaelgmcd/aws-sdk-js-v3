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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateContainerServiceDeploymentRequest, CreateContainerServiceDeploymentResult } from "../models/models_0";
import {
  de_CreateContainerServiceDeploymentCommand,
  se_CreateContainerServiceDeploymentCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateContainerServiceDeploymentCommand}.
 */
export interface CreateContainerServiceDeploymentCommandInput extends CreateContainerServiceDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link CreateContainerServiceDeploymentCommand}.
 */
export interface CreateContainerServiceDeploymentCommandOutput
  extends CreateContainerServiceDeploymentResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a deployment for your Amazon Lightsail container service.</p>
 *          <p>A deployment specifies the containers that will be launched on the container service and
 *       their settings, such as the ports to open, the environment variables to apply, and the launch
 *       command to run. It also specifies the container that will serve as the public endpoint of the
 *       deployment and its settings, such as the HTTP or HTTPS port to use, and the health check
 *       configuration.</p>
 *          <p>You can deploy containers to your container service using container images from a public
 *       registry such as Amazon ECR Public, or from your local machine. For more information, see
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the
 *         <i>Amazon Lightsail Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateContainerServiceDeploymentCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateContainerServiceDeploymentCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // CreateContainerServiceDeploymentRequest
 *   serviceName: "STRING_VALUE", // required
 *   containers: { // ContainerMap
 *     "<keys>": { // Container
 *       image: "STRING_VALUE",
 *       command: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       environment: { // Environment
 *         "<keys>": "STRING_VALUE",
 *       },
 *       ports: { // PortMap
 *         "<keys>": "HTTP" || "HTTPS" || "TCP" || "UDP",
 *       },
 *     },
 *   },
 *   publicEndpoint: { // EndpointRequest
 *     containerName: "STRING_VALUE", // required
 *     containerPort: Number("int"), // required
 *     healthCheck: { // ContainerServiceHealthCheckConfig
 *       healthyThreshold: Number("int"),
 *       unhealthyThreshold: Number("int"),
 *       timeoutSeconds: Number("int"),
 *       intervalSeconds: Number("int"),
 *       path: "STRING_VALUE",
 *       successCodes: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateContainerServiceDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateContainerServiceDeploymentResult
 * //   containerService: { // ContainerService
 * //     containerServiceName: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     location: { // ResourceLocation
 * //       availabilityZone: "STRING_VALUE",
 * //       regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //     },
 * //     resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     power: "nano" || "micro" || "small" || "medium" || "large" || "xlarge",
 * //     powerId: "STRING_VALUE",
 * //     state: "PENDING" || "READY" || "RUNNING" || "UPDATING" || "DELETING" || "DISABLED" || "DEPLOYING",
 * //     stateDetail: { // ContainerServiceStateDetail
 * //       code: "CREATING_SYSTEM_RESOURCES" || "CREATING_NETWORK_INFRASTRUCTURE" || "PROVISIONING_CERTIFICATE" || "PROVISIONING_SERVICE" || "CREATING_DEPLOYMENT" || "EVALUATING_HEALTH_CHECK" || "ACTIVATING_DEPLOYMENT" || "CERTIFICATE_LIMIT_EXCEEDED" || "UNKNOWN_ERROR",
 * //       message: "STRING_VALUE",
 * //     },
 * //     scale: Number("int"),
 * //     currentDeployment: { // ContainerServiceDeployment
 * //       version: Number("int"),
 * //       state: "ACTIVATING" || "ACTIVE" || "INACTIVE" || "FAILED",
 * //       containers: { // ContainerMap
 * //         "<keys>": { // Container
 * //           image: "STRING_VALUE",
 * //           command: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           environment: { // Environment
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           ports: { // PortMap
 * //             "<keys>": "HTTP" || "HTTPS" || "TCP" || "UDP",
 * //           },
 * //         },
 * //       },
 * //       publicEndpoint: { // ContainerServiceEndpoint
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //         healthCheck: { // ContainerServiceHealthCheckConfig
 * //           healthyThreshold: Number("int"),
 * //           unhealthyThreshold: Number("int"),
 * //           timeoutSeconds: Number("int"),
 * //           intervalSeconds: Number("int"),
 * //           path: "STRING_VALUE",
 * //           successCodes: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //     nextDeployment: {
 * //       version: Number("int"),
 * //       state: "ACTIVATING" || "ACTIVE" || "INACTIVE" || "FAILED",
 * //       containers: {
 * //         "<keys>": {
 * //           image: "STRING_VALUE",
 * //           command: [
 * //             "STRING_VALUE",
 * //           ],
 * //           environment: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           ports: {
 * //             "<keys>": "HTTP" || "HTTPS" || "TCP" || "UDP",
 * //           },
 * //         },
 * //       },
 * //       publicEndpoint: {
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //         healthCheck: {
 * //           healthyThreshold: Number("int"),
 * //           unhealthyThreshold: Number("int"),
 * //           timeoutSeconds: Number("int"),
 * //           intervalSeconds: Number("int"),
 * //           path: "STRING_VALUE",
 * //           successCodes: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //     isDisabled: true || false,
 * //     principalArn: "STRING_VALUE",
 * //     privateDomainName: "STRING_VALUE",
 * //     publicDomainNames: { // ContainerServicePublicDomains
 * //       "<keys>": [ // ContainerServicePublicDomainsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     url: "STRING_VALUE",
 * //     privateRegistryAccess: { // PrivateRegistryAccess
 * //       ecrImagePullerRole: { // ContainerServiceECRImagePullerRole
 * //         isActive: true || false,
 * //         principalArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateContainerServiceDeploymentCommandInput - {@link CreateContainerServiceDeploymentCommandInput}
 * @returns {@link CreateContainerServiceDeploymentCommandOutput}
 * @see {@link CreateContainerServiceDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateContainerServiceDeploymentCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class CreateContainerServiceDeploymentCommand extends $Command<
  CreateContainerServiceDeploymentCommandInput,
  CreateContainerServiceDeploymentCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: CreateContainerServiceDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateContainerServiceDeploymentCommandInput, CreateContainerServiceDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateContainerServiceDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateContainerServiceDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Lightsail_20161128",
        operation: "CreateContainerServiceDeployment",
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
  private serialize(
    input: CreateContainerServiceDeploymentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateContainerServiceDeploymentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateContainerServiceDeploymentCommandOutput> {
    return de_CreateContainerServiceDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
