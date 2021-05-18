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
    const mark = parseFloat(markTR.text());
    const valueArr = markTR.attr('data-original-title').split('<br>');
    const value = 100;
    if (valueArr.length === 3) {
      parseFloat(valueArr[1].match(/\d\d/)[0]);
    }

    const m = new Mark(mark, value, sub);
    data.update((c) => [...c, m]);
  });
}
