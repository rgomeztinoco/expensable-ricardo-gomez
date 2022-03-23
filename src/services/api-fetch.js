import { BASE_URI, tokenKey } from "../config";

export default async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {
  // const token = sessionStorage.getItem(tokenKey);
  const token = "o6kxQPihpJLNa8ATkNQENY1s";

  if (token) {
    headers = {
      Authorization: `Token token=${token}`,
      ...headers,
    };
  }

  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  const config = {
    method: method ?? (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endpoint, config);

  let data;

  // if (response.status == 422) {
  //   data = await response.json();
  //   throw new Error(data);
  // }

  if (!response.ok) {
    try {
      data = await response.json();
      console.log(data.errors);
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw data.errors;
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}
