"use server";

import { unstable_cache as cache } from "next/cache";
import { prisma } from "../prisma";
import { auth } from "@/auth";

export const getMyProfile = cache(
  async (email: string | null | undefined) => {
    try {
      if (!email) return null;
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) return null;
      return user;
    } catch {
      return null;
    }
  },
  [],
  { revalidate: 60 * 60 * 24 }
);