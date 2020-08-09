import axios from "axios";
import { SUBSCRIPTION_ENDPOINT } from "../../../core/config";

const subscribeUser = async (payload) => {
  if (!payload?.name || !payload?.email) {
    return {
      error: "invalid data",
    };
  }

  const fallbackErrorMessage = "Some unhandled error occured. Please try again";

  try {
    const response = await axios.post(SUBSCRIPTION_ENDPOINT, payload);

    if (response.status !== 200) {
      return {
        error: fallbackErrorMessage,
      };
    }

    return response?.data;
  } catch (err) {
    return {
      error: err?.response?.data?.errorMessage || fallbackErrorMessage,
    };
  }
};

export default subscribeUser;
