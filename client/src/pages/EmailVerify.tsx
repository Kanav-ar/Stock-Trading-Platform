import { useEffect } from "react";
import { api } from "../api/axios";
import { Navigate, useParams } from "react-router";
import BlueBtn from "../components/common/BlueBtn";

export default function EmailVerify() {
  const { token } = useParams();
  useEffect(() => {
    (async () => {
      const response = await api.post(`/verify-email/${token}`);
      console.log(response.data);
      
    })();
  }, []);

  return <div className="text-white h-screen gap-8 flex justify-center items-center flex-col text-center">
    <h1 className="text-3xl">Verify your email</h1>
    <button onClick={() => {navigate({to:"/"})}}>verify</button>
  </div>;
}
