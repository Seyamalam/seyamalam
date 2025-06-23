import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site.config'

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #ffffff 0%, #3b82f6 50%, #a855f7 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              marginBottom: 16,
            }}
          >
            {siteConfig.name}
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: 32,
              color: '#e5e7eb',
              margin: 0,
              marginBottom: 24,
              maxWidth: 800,
            }}
          >
            Full Stack Developer & Research Scientist
          </p>

          {/* Specializations */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              justifyContent: 'center',
              maxWidth: 800,
            }}
          >
            {['AI/ML Research', 'React/Next.js', 'IEEE Publications', 'Computer Vision'].map((skill) => (
              <div
                key={skill}
                style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: 24,
                  padding: '8px 20px',
                  color: '#3b82f6',
                  fontSize: 18,
                }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Domain */}
          <p
            style={{
              position: 'absolute',
              bottom: 40,
              fontSize: 20,
              color: '#9ca3af',
              margin: 0,
            }}
          >
            seyamalam.xyz
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 