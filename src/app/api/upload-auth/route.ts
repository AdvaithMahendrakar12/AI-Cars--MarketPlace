// File: app/api/upload-auth/route.ts
import { getUploadAuthParams } from "@imagekit/next/server"

export async function GET() {


    const { token, expire, signature } = getUploadAuthParams({
        privateKey: process.env.IMAGE_KIT_PRIVATE_KEY as string, 
        publicKey: process.env.IMAGE_KIT_PUBLIC_KEY as string,
      
    })

    return Response.json({ token, expire, signature, publicKey: process.env.IMAGE_KIT_PUBLIC_KEY })
}