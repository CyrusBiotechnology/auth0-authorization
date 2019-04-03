import fetch, { Response } from 'node-fetch';
import * as url from 'url';
import { HttpError } from './http-error';

export interface IGetOptions {
  accessToken: string;
  queryParams?: {
    [key: string]: string;
  }
  url: string;
}

export interface ICreateOptions<T> {
  accessToken: string;
  body: T;
  url: string;
}

export interface IPatchOptions<T> {
  accessToken: string;
  body: T;
  url: string;
}

export interface IPutOptions<T> {
  accessToken: string;
  body: T;
  url: string;
}

export interface IDeleteOptions<T> {
  accessToken: string;
  body?: T;
  url: string;
}

export interface IResponse<T> extends Response {
  json(): Promise<T>;
}

export async function get<ResponseBody>(request: IGetOptions): Promise<IResponse<ResponseBody>> {
  const urlObject = new url.URL(request.url);
  urlObject.search = new url.URLSearchParams(request.queryParams).toString();
  const urlString = urlObject.toString();
  return fetch(urlString, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${request.accessToken}`
    }
  });
}

export async function create<RequestBody, ResponseBody>(request: ICreateOptions<RequestBody>): Promise<IResponse<ResponseBody>> {
  return fetch(request.url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${request.accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.body),
  });
}

export async function patch<RequestBody, ResponseBody>(request: IPatchOptions<RequestBody>): Promise<IResponse<ResponseBody>> {
  return fetch(request.url, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${request.accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.body),
  });
}

export async function put<RequestBody, ResponseBody>(request: IPutOptions<RequestBody>): Promise<IResponse<ResponseBody>> {
  return fetch(request.url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${request.accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.body),
  });
}

export async function del<RequestBody, ResponseBody>(request: IDeleteOptions<RequestBody>): Promise<ResponseBody> {
  const response = await fetch(request.url, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${request.accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request.body),
  });
  if (!response.ok) {
    throw new HttpError(response.status, await response.json());
  }
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
}
