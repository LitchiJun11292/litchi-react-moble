/**
 * 重定向组件
 */
 import { useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 
 const RedirectRouter = ({ to }: { to: string }) => {
   const navigate = useNavigate();
   useEffect(() => {
     navigate(to);
   });
   return null;
 };
 
 export default RedirectRouter;
 