import { decrypt } from "../cipher";
export const getSessionData = async () => {
  if (JSON.parse(sessionStorage.getItem("userdata")) !== null) {
    const decryptedData = await decrypt(
      JSON.parse(sessionStorage.getItem("userdata"))
    );
    return decryptedData ? decryptedData : "";
  }
};
