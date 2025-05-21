import { createUploadthing, type FileRouter } from "uploadthing/next";
import sharp from "sharp";
import { db } from "@/db";

import { z } from "zod";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .input(z.object({ configID: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { configID } = metadata.input;

      const res = await fetch(file.ufsUrl); // Fetch the file from the URL
      const buffer = await res.arrayBuffer(); // image is convered to arrayBuffer

      const imgMetadata = await sharp(buffer).metadata();
      const { width, height } = imgMetadata;

      if (!configID) {
        const configuration = await db.configuration.create({
          data: {
            imageUrl: file.ufsUrl,
            height: height || 500,
            width: width || 500,
          },
        });
        return { configID: configuration.id };
      } else {
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configID,
          },
          data: {
            droppedImageUrl: file.ufsUrl,
          },
        });
        return { configID: updatedConfiguration.id };
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
