"use client";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./ui/themeMode";

export function Toast() {
  const { theme } = useTheme();

  const toastStyle =
    theme === "light"
      ? {
          borderRadius: "12px",
          padding: "16px 24px",
          background: "#f1f5f9", // fondo claro
          color: "#1e293b", // texto oscuro
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          fontWeight: "500",
          fontSize: "16px",
        }
      : {
          borderRadius: "12px",
          padding: "16px 24px",
          background: "#1e293b", // fondo oscuro
          color: "#f1f5f9", // texto claro
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          fontWeight: "500",
          fontSize: "16px",
        };

  return (
    <>
      <Toaster
      position="top-right"
      containerStyle={{
        position: "fixed",
        top: "80px",
        right: "1rem",
        width: "auto",
      }}
      toastOptions={{
        duration: 4000,
        style: toastStyle,
      }}
    />
    </>
  );
}
