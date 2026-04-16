"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface PulseMarker {
  id: string
  location: [number, number]
  delay: number
}

interface GlobePulseProps {
  markers?: PulseMarker[]
  className?: string
  speed?: number
}

const defaultMarkers: PulseMarker[] = [
  { id: "pulse-1", location: [19.43, -99.13], delay: 0 },       // Ciudad de México
  { id: "pulse-2", location: [40.71, -74.01], delay: 0.5 },     // Nueva York
  { id: "pulse-3", location: [51.51, -0.13],  delay: 1.0 },     // Londres
  { id: "pulse-4", location: [-33.87, 151.21], delay: 1.5 },    // Sídney
  { id: "pulse-5", location: [35.68, 139.65], delay: 2.0 },     // Tokio
]

export function GlobePulse({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
}: GlobePulseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.25,
        dark: 1,
        diffuse: 1.6,
        mapSamples: 14000,
        mapBrightness: 11,
        baseColor: [0.12, 0.18, 0.28],
        markerColor: [0.0, 0.85, 0.95],
        glowColor: [0.05, 0.28, 0.36],
        markerElevation: 0,
        markers: markers.map((m) => ({
          location: m.location,
          size: 0.03,
          id: m.id,
        })),
        arcs: [],
        arcColor: [0.3, 0.85, 0.95],
        arcWidth: 0.5,
        arcHeight: 0.25,
        opacity: 1,
      })

      function animate() {
        if (!isPausedRef.current) phi += speed
        globe!.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.25 + thetaOffsetRef.current + dragOffset.current.theta,
        })
        animationId = requestAnimationFrame(animate)
      }
      animate()
      // Fade in after first render
      requestAnimationFrame(() => {
        if (canvas) canvas.style.opacity = "1"
      })
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
      return () => ro.disconnect()
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, speed])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.4s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      {/* Pulse rings — CSS only, no JS cost */}
      {markers.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            positionAnchor: `--cobe-${m.id}` as any,
            bottom: "anchor(center)",
            left: "anchor(center)",
            translate: "-50% 50%",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: `var(--cobe-visible-${m.id}, 0)`,
            transition: "opacity 0.4s",
          }}
        >
          <span style={{
            position: "absolute", inset: 0,
            border: "2px solid #00C8E8", borderRadius: "50%",
            animation: `globe-pulse 2s ease-out infinite ${m.delay}s`,
            opacity: 0,
          }} />
          <span style={{
            position: "absolute", inset: 0,
            border: "2px solid #00C8E8", borderRadius: "50%",
            animation: `globe-pulse 2s ease-out infinite ${m.delay + 0.7}s`,
            opacity: 0,
          }} />
          <span style={{
            width: 8, height: 8,
            background: "#00C8E8",
            borderRadius: "50%",
            boxShadow: "0 0 0 3px #020408, 0 0 0 5px #00C8E8",
          }} />
        </div>
      ))}
      <style>{`
        @keyframes globe-pulse {
          0%   { transform: scale(0.3); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
