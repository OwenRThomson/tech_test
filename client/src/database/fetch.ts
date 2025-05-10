/*

  This is a function I use in other projects to fetch data and handle errors.
  I find it much nicer than having a series of try/catch blocks everywhere where you end up losing a lot of details about the error.

*/

import { NetworkResult } from "./types";

// Specialized function for handling fetch requests
export async function fetchWithErrorHandling<T>(
  url: string,
  options?: RequestInit
): Promise<NetworkResult<T>> {
  try {
    const response = await fetch(url, options);

    // Handle successful responses
    if (response.ok) {
      const data = await response.json();
      return {
        data: data as T,
        error: null,
        status: response.status,
        headers: response.headers,
      };
    }

    // Handle error responses
    let errorDetails: unknown;

    try {
      errorDetails = await response.json();
    } catch {
      errorDetails = { message: response.statusText };
    }

    return {
      data: null,
      error: {
        status: response.status,
        statusText: response.statusText,
        message: `Request failed with status ${response.status}: ${response.statusText}`,
        details: errorDetails,
      },
    };
  } catch (error: unknown) {
    // Handle network errors or other exceptions
    return {
      data: null,
      error: {
        status: 0,
        statusText: "Network Error",
        message:
          error instanceof Error ? error.message : "Unknown network error",
        details: error,
      },
    };
  }
}
