import sys,json,time
from playwright.sync_api import sync_playwright
src=sys.argv[1]; tag=sys.argv[2]
base='https://1piece1ampoule.fr' if src=='live' else 'http://127.0.0.1:8797'
q='?nc=%d'%time.time() if src=='live' else ''
pages=['/tests/imalent-gr35/','/marques/imalent/']
out='/workspace/1piece1ampoule/captures_imalent/'
with sync_playwright() as p:
  b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
  for w,h,dev in [(390,844,'mobile'),(1366,800,'desktop')]:
    for path in pages:
      if src=='live': time.sleep(15)
      c=b.new_context(viewport={'width':w,'height':h},is_mobile=(w==390)); pg=c.new_page(); errs=[]; st={}
      pg.on('pageerror',lambda e:errs.append(str(e)[:100]))
      pg.on('response',lambda r: r.request.resource_type=='image' and st.__setitem__(r.url.split('/')[-1][:40],r.status))
      pg.goto(base+path+q,wait_until='networkidle',timeout=60000)
      pg.evaluate("async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,80))}window.scrollTo(0,0)}")
      pg.wait_for_timeout(800)
      r=pg.evaluate("""()=>{const imgs=[...document.images];const big=imgs.filter(i=>i.getBoundingClientRect().width>150);
        return {h1:document.querySelectorAll('h1').length,broken:imgs.filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.currentSrc.split('/').pop()),
        nimg:imgs.length,overflow:document.documentElement.scrollWidth-window.innerWidth,
        firstBigImgTop:big.length?Math.round(big[0].getBoundingClientRect().top+scrollY):null}}""")
      name=f"{out}{tag}_{src}_{dev}_{path.strip('/').replace('/','_')}"
      pg.screenshot(path=name+'.png')
      if dev=='mobile':
        t=pg.query_selector('[data-nav-menu-btn]')
        if t and t.is_visible():
          t.click(); pg.wait_for_timeout(500); r['menu']=pg.get_attribute('[data-nav-menu-btn]','aria-expanded'); pg.screenshot(path=name+'_menu.png')
        else: r['menu']='no-toggle'
      r['img_status']=sorted(set(st.values())); r['jserr']=errs[:3]; r.update(dev=dev,path=path); print(json.dumps(r,ensure_ascii=False)); c.close()
  b.close()
