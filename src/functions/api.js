const URI = "https://js2-ecommerce-api.vercel.app/api";

const headers = (data, token) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
};

const getheaders = (token) => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

const errorMessage = (message, status) => {
  throw { message, status };
};

export const getProducts = async () => {
  const response = await fetch(`${URI}/products`);
  if (!response.ok) {
    errorMessage("Failed to fetch products.", response.status);
  }
  return response.json();
};

export const getProduct = async (id) => {
  const response = await fetch(`${URI}/products/${id}`);
  if (!response.ok) {
    errorMessage("Bad request", response.status);
  }
  return response.json();
};

export const createOrder = async (data, token) => {
  const response = await fetch(`${URI}/orders`, headers(data, token));
  if (!response.ok) {
    errorMessage(
      "Bad request, all fields must be entered correctly",
      response.status
    );
  }
  const responseData = await response.json();

  return responseData;
};

export const getOrders = async (token) => {
  const response = await fetch(`${URI}/orders`, getheaders(token));
  if (!response.ok) {
    console.log("response", response);

    errorMessage("Unauthorized, no valid token has been sent", response.status);
  }
  const responseData = await response.json();

  return responseData;
};

export const getOrder = async (token, id) => {
  const response = await fetch(`${URI}/orders${id}`, getheaders(token));
  if (!response.ok) {
    errorMessage("Unauthorized, no valid token has been sent", response.status);
  }
  const responseData = await response.json();
  return responseData;
};

export const createUser = async (data) => {
  const response = await fetch(`${URI}/auth/register`, headers(data));
  if (!response.ok) {
    errorMessage("Bad request, failed to create user", response.status);
  }
  const responseData = await response.json();
  return responseData;
};

export const loginUser = async (data) => {
  const response = await fetch(`${URI}/auth/login`, headers(data));
  if (!response.ok) {
    errorMessage("Bad request", response.status);
  }

  const responseData = await response.json();

  return responseData;
};

export const createMessage = async (data) => {
  const response = await fetch(`${URI}/messages`, headers(data));
  if (!response.ok) {
    errorMessage("Bad request", response.status);
  }

  const responseData = await response.json();

  return responseData;
};
