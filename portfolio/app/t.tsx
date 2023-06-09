import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { Poppins } from "next/font/google";

const headingFont = Poppins({
  display: "swap",
  subsets: ["latin-ext"],
  weight: "700",
});

const textFont = Poppins({
  display: "swap",
  subsets: ["latin-ext"],
  weight: "400",
});

export function THeading({ children }: { children: React.ReactNode }) {
  return (
    <Heading
      mb={[1, 2, 4]}
      className={`${headingFont.className}`}
      as={"h1"}
      fontSize={["lg", null, "xl"]}
    >
      {children}
    </Heading>
  );
}

export function TText({ children }: { children: React.ReactNode }) {
  return (
    <Text
      mb={[1, 2, 4]}
      className={`${textFont.className}`}
      fontSize={["sm", null, "md"]}
    >
      {children}
    </Text>
  );
}
