import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/icone';
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg'));

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputName = file.replace('.jpg', '.png');
  const outputPath = path.join(inputDir, outputName);
  
  console.log(`Processing ${file}...`);
  
  try {
    const blob = await removeBackground(inputPath);
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(outputPath, buffer);
    console.log(`  -> Saved ${outputName}`);
  } catch (err) {
    console.error(`  Error: ${err.message}`);
  }
}

console.log('Done!');
