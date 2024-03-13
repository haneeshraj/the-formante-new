import { Single } from "@/types/types";
import prisma from "@/utils/prisma";

export async function getSingles() {
  try {
    const singles: Single[] = await prisma.track.findMany({
      include: {
        artists: {
          select: {
            name: true,
            href: true,
          },
        },
      },
    });

    return singles;
  } catch (error) {
    console.error("Error in getSingles:", error);

    // throw new Error("Something went wrong fetching the singles!");
  }
}

export async function getAlbums() {
  try {
    return [];
  } catch (error) {
    throw new Error("Something went wrong fetching the albums!");
  }
}

export async function getSnippets() {
  try {
    return [];
  } catch (error) {
    throw new Error("Something went wrong fetching the snippets!");
  }
}

export async function getInfo() {
  try {
    const socials = await prisma.information.findFirst({});
    return socials;
  } catch (error) {
    console.error("Error in getInfo:", error);
    return {
      _id: "",
      youtube: "",
      spotify: "",
      apple: "",
      email: "",
      instagram: "",
      phone: "",
      twitter: "",
    };
  }
}
