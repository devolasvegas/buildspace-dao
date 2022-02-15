import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  '0x4497aB5C2d516af4AED6e9aeD15ffa1e2BcB8cA3',
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Wave Forms",
        description: "This NFT will give you access to SynthDAO!",
        image: readFileSync("scripts/assets/waveforms.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()