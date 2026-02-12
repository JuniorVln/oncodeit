const ffmpeg = require('ffmpeg-static');
const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'public/loopedshape2.mp4');
const outputPath = path.join(__dirname, 'public/hero-bg.mp4');

console.log('Video Compression Started');
console.log(`Input: ${inputPath}`);
console.log(`Output: ${outputPath}`);

if (!fs.existsSync(inputPath)) {
    console.error('Error: Input file does not exist!');
    process.exit(1);
}

// Compression settings:
// -vcodec libx264: H.264 codec (widely supported)
// -crf 28: Content Rate Factor (higher = more compression, 28 is high but good for bg)
// -preset medium: Balance between speed and compression
// -an: Remove audio (saves space)
// -vf "scale=-2:720": Scale to 720p height, width auto-calculated (good for bg, huge saving)

const args = [
    '-i', inputPath,
    '-vcodec', 'libx264',
    '-crf', '28',
    '-preset', 'medium',
    '-an',
    '-vf', 'scale=-2:720',
    '-y',
    outputPath
];

const child = execFile(ffmpeg, args, (error, stdout, stderr) => {
    if (error) {
        console.error('Compression Failed:', error);
        console.error('FFmpeg Log:', stderr);
        process.exit(1);
    }
    console.log('Compression Completed Successfully!');
    const stats = fs.statSync(outputPath);
    console.log(`New File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
});

child.stderr.on('data', (data) => {
    // console.log(data.toString()); // Uncomment for verbose logs
});
