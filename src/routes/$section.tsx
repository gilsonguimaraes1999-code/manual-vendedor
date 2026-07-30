import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import ManualApp from "@/components/ManualApp";
import { useAuth } from "@/lib/AuthContext";

export const Route = createFileRoute("/$section")({
  ssr: false,
  component: SectionRoute,
});

function SectionRoute() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/login", replace: true });
    }
  }, [user, loading, navigate]);

  if (loading || !user) return null;
  return <ManualApp />;
}