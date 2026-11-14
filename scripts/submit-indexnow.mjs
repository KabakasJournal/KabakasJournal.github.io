import fs from 'node:fs';
import path from 'node:path';

export async function submitIndexNow({ root, site, urls }) {
  try {
    const keyPath = path.join(root, 'f88984efb1b2408aa705198f42c076dc.txt');
    const key = fs.readFileSync(keyPath, 'utf8').trim();

    if (!key) throw new Error('IndexNow key file is empty.');

    const host = new URL(site).host;
    const urlList = [...new Set(urls)].filter(url =>
      typeof url === 'string' && url.startsWith(`https://${host}/`)
    );

    if (urlList.length === 0) throw new Error('No valid URLs to submit.');

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host, key, urlList })
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`HTTP ${response.status}: ${detail}`);
    }

    console.log(`[IndexNow] Successfully submitted ${urlList.length} URLs. HTTP ${response.status}.`);
    return true;
  } catch (error) {
    console.warn(`[IndexNow] Notification failed: ${error.message}`);
    return false;
  }
}
