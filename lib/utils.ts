import * as crypto from "crypto";
import { APIGatewayProxyResult } from "aws-lambda";

export function response(statusCode, body): APIGatewayProxyResult {
  return {
    statusCode,
    body: JSON.stringify(body),
  };
}

export function createdResponse(message: string, data: any) {
  return response(201, {
    message,
    data,
  });
}
export function successResponse(body: any) {
  return response(200, body);
}

export function errorResponse(statusCode: number, message: string, data: any) {
  return response(statusCode, {
    message,
    data,
  });
}

export function uuid() {
  return crypto.randomUUID();
}
