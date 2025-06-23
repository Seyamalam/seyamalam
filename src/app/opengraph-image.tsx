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
  // Fetch the profile image
  const profileImageResponse = await fetch(new URL('/hero.png', siteConfig.origin))
  const profileImageBuffer = await profileImageResponse.arrayBuffer()

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
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
          position: 'relative',
          fontFamily: 'Inter, "Geist Sans", system-ui, sans-serif',
        }}
      >
        {/* Subtle background elements matching homepage */}
        <div
          style={{
            position: 'absolute',
            top: 60,
            left: 80,
            width: 120,
            height: 120,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1))',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            right: 80,
            width: 140,
            height: 140,
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(196, 181, 253, 0.1))',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 100,
            height: 100,
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(134, 239, 172, 0.1))',
            borderRadius: '50%',
            filter: 'blur(30px)',
          }}
        />
        
        {/* Main content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 10,
            padding: '40px',
          }}
        >
          {/* Profile Image with gradient border matching homepage */}
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              padding: 4,
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={`data:image/png;base64,${Buffer.from(profileImageBuffer).toString('base64')}`}
              alt="Touhidul Alam Seyam"
              style={{
                width: 132,
                height: 132,
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Name with gradient text matching homepage */}
          <h1
            style={{
              fontSize: 56,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 30%, #a855f7 70%, #7c3aed 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Touhidul Alam Seyam
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: 24,
              color: '#64748b',
              margin: 0,
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            Full Stack Developer & Research Scientist
          </p>

          {/* Badges matching homepage design */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <div
              style={{
                background: '#f1f5f9',
                border: '1px solid #e2e8f0',
                borderRadius: 20,
                padding: '6px 16px',
                fontSize: 14,
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              📍 Available for Remote Work
            </div>
            <div
              style={{
                background: 'transparent',
                border: '1px solid #cbd5e1',
                borderRadius: 20,
                padding: '6px 16px',
                fontSize: 14,
                color: '#64748b',
              }}
            >
              📚 8+ Publications
            </div>
            <div
              style={{
                background: '#f1f5f9',
                border: '1px solid #e2e8f0',
                borderRadius: 20,
                padding: '6px 16px',
                fontSize: 14,
                color: '#475569',
              }}
            >
              🏆 IEEE & Springer Author
            </div>
          </div>

          {/* Specializations */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              justifyContent: 'center',
              maxWidth: 800,
              marginBottom: 24,
            }}
          >
            {['AI/ML Research', 'React/Next.js', 'Computer Vision', 'Healthcare AI'].map((skill) => (
              <div
                key={skill}
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1))',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: 24,
                  padding: '8px 20px',
                  color: '#3b82f6',
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Domain URL */}
          <p
            style={{
              fontSize: 18,
              color: '#94a3b8',
              margin: 0,
              fontWeight: 500,
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