import { createUploadthing } from "uploadthing/h3";
import type { FileRouter } from "uploadthing/h3";

const f = createUploadthing();

export const uploadRouter = {
  videoAndImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 4,
    },
    video: {
      maxFileSize: "16MB",
    },
  })
    .middleware(({ event }) => {
      event;
      return { foo: "bar" as const };
    })
    .onUploadComplete(({ file, metadata }) => {
      metadata;

      console.log("upload completed", file);
      return { foo: "bar" as const };
    }),
  e2: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 4,
    },
    video: {
      maxFileSize: "16MB",
    },
  })
    .middleware(({ event }) => {
      event;

      return { foo: "bar" as const };
    })
    .onUploadComplete(({ file, metadata }) => {
      metadata;
      console.log("upload completed", file);

      return { bar: "baz" as const };
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
