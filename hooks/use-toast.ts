"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"

export type ToastProps = {
  id?: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive" | "success"
  duration?: number
}

export type Toast = ToastProps & {
  id: string
}

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000

type ToasterToast = Toast & {
  dismiss: () => void
}

type ToastActionType = {
  toast: (props: ToastProps) => void
  dismiss: (toastId: string) => void
  dismissAll: () => void
  toasts: ToasterToast[]
}

export const useToast = (): ToastActionType => {
  const [toasts, setToasts] = useState<ToasterToast[]>([])

  useEffect(() => {
    const timers = toasts.map((toast) => {
      if (toast.duration !== Number.POSITIVE_INFINITY) {
        const timer = setTimeout(() => {
          dismiss(toast.id)
        }, toast.duration || 5000)

        return timer
      }
      return undefined
    })

    return () => {
      timers.forEach((timer) => {
        if (timer) clearTimeout(timer)
      })
    }
  }, [toasts])

  const dismiss = useCallback((toastId: string) => {
    setToasts((prevToasts) => {
      const targetToast = prevToasts.find((toast) => toast.id === toastId)

      if (targetToast) {
        setTimeout(() => {
          setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId))
        }, TOAST_REMOVE_DELAY)
      }

      return prevToasts
    })
  }, [])

  const dismissAll = useCallback(() => {
    toasts.forEach((toast) => {
      dismiss(toast.id)
    })
  }, [dismiss, toasts])

  const toast = useCallback(
    ({ ...props }: ToastProps) => {
      const id = props.id || String(Date.now())

      setToasts((prevToasts) => {
        // If we already have a toast with this ID, update it
        if (prevToasts.find((toast) => toast.id === id)) {
          return prevToasts.map((toast) => {
            if (toast.id === id) {
              return {
                ...toast,
                ...props,
                id,
                dismiss: () => dismiss(id),
              }
            }
            return toast
          })
        }

        // Otherwise, add a new toast
        return [
          {
            ...props,
            id,
            dismiss: () => dismiss(id),
          },
          // Only keep the last X toasts
          ...prevToasts,
        ].slice(0, TOAST_LIMIT)
      })

      return id
    },
    [dismiss],
  )

  return {
    toast,
    dismiss,
    dismissAll,
    toasts,
  }
}

export default useToast
