import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import Login from "@/components/Login";
import { useAuth } from "@/lib/AuthContext";

export const Route = createFileRoute("/login")({
  ssr: false,
  component: LoginRoute,
});

function LoginRoute() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate({ to: "/$section", params: { section: "inicio" }, replace: true });
    }
  }, [user, loading, navigate]);

  if (loading || user) return null;
  return <Login />;
}