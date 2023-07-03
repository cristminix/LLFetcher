import fetch from "node-fetch"
import db from "./db.json" assert { type: 'json' }
import fs from "fs"
import jquery from 'jquery'
import { JSDOM } from 'jsdom'

const client = async() =>{
    const url = 'https://www.google.com'
    console.log(`Visiting ${url}`)
    fetch(url).then(e=>{
        console.log(e)
    }).catch(e=>console.error(e))
    fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const publicIP = data.ip;
    console.log(publicIP);
  })
  .catch(error => {
    console.log(error);
  });

} 
const main = async() =>{
    // await client()
    const course = db.records.Course['1']
    const authors = course.authorIds.map(id => db.records.Author[id])
    const sectionIds = Object.keys(db.records.Section).filter(id => db.records.Section[id].courseId == course.id)
    const sections = sectionIds.map(id => db.records.Section[id])
    const tocs = {}

    sections.map(section => {
        const tocIds = Object.keys(db.records.Toc).filter(id => db.records.Toc[id].sectionId == section.id)

        tocs[section.slug] = tocIds.map(id => db.records.Toc[id])
    })
    // console.log(course, authors, sections, tocs)
    // process.exit(0)

    for(const sSlug in tocs){
        for(let toc of tocs[sSlug]){
            const tocUrl = `https://linkedin.com/learning/${course.slug}/${toc.slug}`
            console.log(tocUrl)
            console.log(`Visiting ${tocUrl}`)
            fetch(tocUrl).then(e=>e.text()).then(e=>{
                console.log(e)
            }).catch(e=>console.error(e))
            break
        }
        break

    }
}

const main2 = async()=>{
    const html = fs.readFileSync('output.html', 'utf-8')
    const dom = new JSDOM(html)
    const window = dom.window
    const $ = jquery(window)
    $.expr[':'].containsRegex = $.expr.createPseudo(function (pattern) {
        var regex = new RegExp(pattern, 'i');
        return function (elem) {
          return regex.test($(elem).text());
        };
      });
    const nd = $('a:containsRegex("sign in")')
    console.log(nd)
}
main2()
// main()