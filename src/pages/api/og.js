import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { createHash } from 'crypto';

export default async function handler(req, res) {
  const { title = '', date = '', banner = '', timecode = '' } = req.query;

  const params = new URLSearchParams({ title, date, banner, timecode });
  const fileUrl = `file:${path.join(process.cwd(), 'src/pages/articles/og-image.html')}?${params}`;

  const hash = createHash('md5').update(fileUrl).digest('hex');
  const ogImageDir = path.join(process.cwd(), 'public/og');
  const imageName = `${hash}.png`;
  const imagePath = path.join(ogImageDir, imageName);

  try {
    if (fs.existsSync(imagePath)) {
      const image = fs.readFileSync(imagePath);
      res.setHeader('Content-Type', 'image/png');
      return res.send(image);
    }
  } catch (err) {
    console.error('Error reading existing OG image:', err);
  }

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    const buffer = await page.screenshot();
    await browser.close();

    fs.mkdirSync(ogImageDir, { recursive: true });
    fs.writeFileSync(imagePath, buffer);

    res.setHeader('Content-Type', 'image/png');
    return res.send(buffer);
  } catch (error) {
    console.error('Error generating OG image:', error);
    return res.status(500).json({ error: 'Failed to generate OG image' });
  }
}
