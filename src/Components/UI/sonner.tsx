"use client"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4 text-emerald-500" />
        ),
        info: (
          <InfoIcon className="size-4 text-blue-500" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4 text-amber-500" />
        ),
        error: (
          <OctagonXIcon className="size-4 text-red-500" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin text-slate-500" />
        ),
      }}
      style={
        {
          "--normal-bg": "color-mix(in srgb, var(--color-base-100) 75%, transparent)",
          "--normal-text": "var(--color-base-content)",
          "--normal-border": "color-mix(in srgb, var(--color-base-content) 12%, transparent)",
          "--border-radius": "12px",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast backdrop-blur-md shadow-lg border border-base-content/10 font-sans",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
