import * as cheerio from 'cheerio';
import Mark from './Models/mark';
import { data } from './store';

export default function scrape(html: string) {
  const $ = cheerio.load(html);
  const rows = $('.table-striped > tbody > tr');
  data.set([]);

  const subjects = new Set<string>();

  rows.each((_, el) => {
    const tr = $(el);
    const sub = tr.children('td:nth-child(2)').text();
    subjects.add(sub);

    const markTR = tr.children('td:nth-child(4)');
    let mark = parseFloat(markTR.text());
    if (Number.isNaN(mark)) {
      mark = 0;
    }

    let value = 100;
    try {
      const valueArr = markTR.attr('data-original-title').split('<br>');
      if (valueArr.length === 3) {
        value = parseFloat(valueArr[1].match(/\d\d/)[0]);
      }
    } catch {
      value = 0;
    }

    const m = new Mark(mark, value, sub);
    data.update((c) => [...c, m]);
  });
}
