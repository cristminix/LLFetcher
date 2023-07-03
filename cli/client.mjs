import fetch from "node-fetch"
import db from "./db.json" assert { type: 'json' }
import fs from "fs"
import jquery from 'jquery'
import { JSDOM } from 'jsdom'
import qs from 'query-string'
// fetch("https://www.linkedin.com/learning/creating-fun-and-engaging-video-training-the-how/here-s-the-plan?rand=1688392951673", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9",
//     "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "none",
//     "cookie": "bcookie=\"v=2&1c0bafcd-4760-4569-8d18-c8729124bb45\"; li_sugr=7f1121a7-fc73-410d-967e-012d79e79c83; bscookie=\"v=1&2023060306320579bb7a9b-f648-465a-8adb-d86e18bb4e56AQHNCWhgm61laSyLw6bhElERBme4sObY\"; s_fid=6B83F915CD7C3A0C-294A0C82C8E55DF0; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19512%7CMCMID%7C56952997870462370900584502557062825677%7CMCAAMLH-1686412588%7C3%7CMCAAMB-1686412588%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1685814988s%7CNONE%7CvVersion%7C5.1.1; aam_uuid=57485412165440799770636061730689742086; _gcl_au=1.1.1841685776.1685807805; liap=true; li_ep_auth_context=AFBhcHA9bGVhcm5pbmcsYWlkPTk1MjMxNDczLGlpZD0xMTEyMjQ0MTcscGlkPTE1MzcxMjAyNCxleHA9MTY5MDk5MTg4NDgxOSxjdXI9dHJ1ZQHf_a75HzIemKkvu3QWzzP_taVaEg; JSESSIONID=\"ajax:1493052130203785332\"; UserMatchHistory=AQLKhbpwTZGowwAAAYi-tHp0Ez73GquEp6HR03KkDpRnK4pQdXMKDRk207ZZiKJ703cUO_swcgHuIg; AnalyticsSyncHistory=AQLvE1yvktOQvwAAAYi-tHp04LjYKKxA0Ib6dB7sL1gx5NcV-LTzbN-dm1FU2_84rad_XFWrT_8cazZMS-v7DQ; lil-lang=en_US; lang=v=2&lang=en-us; li_at=AQEGAKcBAAAAAAuUt7UAAAGIgfrp_wAAAYk_vxbMTgAAinVybjpsaTplbnRlcnByaXNlQXV0aFRva2VuOmVKeGpaQUFDMXJXeUgwRTBwMmJwREJETnRsQXRFVWd4QXdBKytBUXledXJuOmxpOmVudGVycHJpc2VQcm9maWxlOih1cm46bGk6ZW50ZXJwcmlzZUFjY291bnQ6OTUyMzE0NzMsMTUzNzEyMDI0KbfIXcYje76vOLb1CwukEFbIqb_Bi222zeE09AOZc0p78toT3m298UeR211y8Z4cr9itXTmlyXEkOADvFqeUpw8nOcHCxVdUloJYhN9EpvgMhqr77A; gpv_pn=www.linkedin.com%2Flearning%2Fcreating-fun-and-engaging-video-training-the-how%2Fhere-s-the-plan; s_ips=442; s_cc=true; lidc=\"b=TGST07:s=T:r=T:a=T:p=T:g=2593:u=1:x=1:i=1688390125:t=1688476525:v=2:sig=AQHo7Y-MD7EM1xCqmfK2MsML0OzOOSWO\"; s_plt=46.28; s_pltp=www.linkedin.com%2Flearning%2Fcreating-fun-and-engaging-video-training-the-how%2Fhere-s-the-plan; s_sq=lnkdprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dwww.linkedin.com%25252Flearning%25252Fcreating-fun-and-engaging-video-training-the-how%25252Fhere-s-the-plan%2526link%253DExecute%252520Page%252520Fn%2526region%253Dcontent-script-app%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dwww.linkedin.com%25252Flearning%25252Fcreating-fun-and-engaging-video-training-the-how%25252Fhere-s-the-plan%2526pidt%253D1%2526oid%253Dfunctionnoop%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DSUBMIT; s_tslv=1688392539335; s_tp=385; s_ppv=www.linkedin.com%2Flearning%2Fcreating-fun-and-engaging-video-training-the-how%2Fhere-s-the-plan%2C115%2C115%2C442%2C1%2C1"
//   },
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET"
// }); 
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
    const cookieContentRow = db.records.Cookie['1']
    const cookieObj = JSON.parse(cookieContentRow.content)
    console.log(qs.stringify(cookieObj))
    // process.exit(0)

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
            const tocUrl = `https://www.linkedin.com/learning/${course.slug}/${toc.slug}`
            console.log(tocUrl)
            console.log(`Visiting ${tocUrl}`)
            fetch(tocUrl,{ 
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"macOS\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "none",
                    "cookie": "bcookie=\"v=2&1c0bafcd-4760-4569-8d18-c8729124bb45\"; li_sugr=7f1121a7-fc73-410d-967e-012d79e79c83; bscookie=\"v=1&2023060306320579bb7a9b-f648-465a-8adb-d86e18bb4e56AQHNCWhgm61laSyLw6bhElERBme4sObY\"; s_fid=6B83F915CD7C3A0C-294A0C82C8E55DF0; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19512%7CMCMID%7C56952997870462370900584502557062825677%7CMCAAMLH-1686412588%7C3%7CMCAAMB-1686412588%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1685814988s%7CNONE%7CvVersion%7C5.1.1; aam_uuid=57485412165440799770636061730689742086; _gcl_au=1.1.1841685776.1685807805; liap=true; li_ep_auth_context=AFBhcHA9bGVhcm5pbmcsYWlkPTk1MjMxNDczLGlpZD0xMTEyMjQ0MTcscGlkPTE1MzcxMjAyNCxleHA9MTY5MDk5MTg4NDgxOSxjdXI9dHJ1ZQHf_a75HzIemKkvu3QWzzP_taVaEg; JSESSIONID=\"ajax:1493052130203785332\"; UserMatchHistory=AQLKhbpwTZGowwAAAYi-tHp0Ez73GquEp6HR03KkDpRnK4pQdXMKDRk207ZZiKJ703cUO_swcgHuIg; AnalyticsSyncHistory=AQLvE1yvktOQvwAAAYi-tHp04LjYKKxA0Ib6dB7sL1gx5NcV-LTzbN-dm1FU2_84rad_XFWrT_8cazZMS-v7DQ; lil-lang=en_US; lang=v=2&lang=en-us; li_at=AQEGAKcBAAAAAAuUt7UAAAGIgfrp_wAAAYk_vxbMTgAAinVybjpsaTplbnRlcnByaXNlQXV0aFRva2VuOmVKeGpaQUFDMXJXeUgwRTBwMmJwREJETnRsQXRFVWd4QXdBKytBUXledXJuOmxpOmVudGVycHJpc2VQcm9maWxlOih1cm46bGk6ZW50ZXJwcmlzZUFjY291bnQ6OTUyMzE0NzMsMTUzNzEyMDI0KbfIXcYje76vOLb1CwukEFbIqb_Bi222zeE09AOZc0p78toT3m298UeR211y8Z4cr9itXTmlyXEkOADvFqeUpw8nOcHCxVdUloJYhN9EpvgMhqr77A; gpv_pn=www.linkedin.com%2Flearning%2Fcreating-fun-and-engaging-video-training-the-how%2Fhere-s-the-plan; s_ips=442; s_cc=true; lidc=\"b=TGST07:s=T:r=T:a=T:p=T:g=2593:u=1:x=1:i=1688390125:t=1688476525:v=2:sig=AQHo7Y-MD7EM1xCqmfK2MsML0OzOOSWO\"; s_plt=46.28; s_pltp=www.linkedin.com%2Flearning%2Fcreating-fun-and-engaging-video-training-the-how%2Fhere-s-the-plan; s_sq=lnkdprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dwww.linkedin.com%25252Flearning%25252Fcreating-fun-and-engaging-video-training-the-how%25252Fhere-s-the-plan%2526link%253DExecute%252520Page%252520Fn%2526region%253Dcontent-script-app%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dwww.linkedin.com%25252Flearning%25252Fcreating-fun-and-engaging-video-training-the-how%25252Fhere-s-the-plan%2526pidt%253D1%2526oid%253Dfunctionnoop%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DSUBMIT; s_tslv=1688392539335; s_tp=385; s_ppv=www.linkedin.com%2Flearning%2Fcreating-fun-and-engaging-video-training-the-how%2Fhere-s-the-plan%2C115%2C115%2C442%2C1%2C1"
                    
                    // "cookie": 'bcookie="v=2&1c0bafcd-4760-4569-8d18-c8729124bb45"; li_sugr=7f1121a7-fc73-410d-967e-012d79e79c83; s_fid=6B83F915CD7C3A0C-294A0C82C8E55DF0; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19512%7CMCMID%7C56952997870462370900584502557062825677%7CMCAAMLH-1686412588%7C3%7CMCAAMB-1686412588%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1685814988s%7CNONE%7CvVersion%7C5.1.1; aam_uuid=57485412165440799770636061730689742086; _gcl_au=1.1.1841685776.1685807805; liap=true; JSESSIONID="ajax:1493052130203785332"; UserMatchHistory=AQLKhbpwTZGowwAAAYi-tHp0Ez73GquEp6HR03KkDpRnK4pQdXMKDRk207ZZiKJ703cUO_swcgHuIg; AnalyticsSyncHistory=AQLvE1yvktOQvwAAAYi-tHp04LjYKKxA0Ib6dB7sL1gx5NcV-LTzbN-dm1FU2_84rad_XFWrT_8cazZMS-v7DQ; lil-lang=en_US; lang=v=2&lang=en-us; gpv_pn=www.linkedin.com%2Flearning%2Fcreating-fun-and-engaging-video-training-the-how%2Fhere-s-the-plan; s_ips=442; s_cc=true; lidc="b=TGST07:s=T:r=T:a=T:p=T:g=2593:u=1:x=1:i=1688390125:t=1688476525:v=2:sig=AQHo7Y-MD7EM1xCqmfK2MsML0OzOOSWO"; s_plt=46.28; s_pltp=www.linkedin.com%2Flearning%2Fcreating-fun-and-engaging-video-training-the-how%2Fhere-s-the-plan; s_sq=lnkdprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dwww.linkedin.com%25252Flearning%25252Fcreating-fun-and-engaging-video-training-the-how%25252Fhere-s-the-plan%2526link%253DExecute%252520Page%252520Fn%2526region%253Dcontent-script-app%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dwww.linkedin.com%25252Flearning%25252Fcreating-fun-and-engaging-video-training-the-how%25252Fhere-s-the-plan%2526pidt%253D1%2526oid%253Dfunctionnoop%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DSUBMIT; s_tslv=1688392539335; s_tp=385; s_ppv=www.linkedin.com%2Flearning%2Fcreating-fun-and-engaging-video-training-the-how%2Fhere-s-the-plan%2C115%2C115%2C442%2C1%2C1'
                },
                  "referrerPolicy": "strict-origin-when-cross-origin",
                  "body": null,
                  "method": "GET",
                  "mode": "cors",
                  "credentials": "include"
              }).then(e=>e.text()).then(htmlContent=>{
                const dom = new JSDOM(htmlContent)
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
                // console.log(htmlContent)
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
// main2()
main()